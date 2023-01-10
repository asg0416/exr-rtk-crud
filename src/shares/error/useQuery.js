import { useEffect, useState } from "react";
import { Spinner } from "../../components/atoms/Spinner";
import { useErrorStatus } from "../../hooks/useCustomContext";
import { api } from "../../redux/api/api";
import instance from "../Api";

// TODO: RTK Query (Customizing queries) 랑 axios 연결해보기,
const useQuery = (url, method) => {
  const [statusCode, setStatusCode] = useState();
  const [apiData, setApiData] = useState();
  const { setErrorStatusCode } = useErrorStatus();
  // console.log('context value useQuery.js :::', setErrorStatusCode);

  useEffect(() => {
    if (!url) return;
    instance[`${method}`](url)
      .then((data) => {
        setStatusCode(data.status);
        setErrorStatusCode(data.status);
        setApiData([...data.data]);
      })
      .catch((e) => {
        setStatusCode(e.response.status);
        setErrorStatusCode(e.response.status);
        setApiData(null);
      });
  }, [url]);

  return { data: apiData, statusCode };
};

export { useQuery };

export const useRtkQuery = (hook = "", params = "") => {
  const [apiStatus, setApiStatus] = useState("");
  const [apiData, setApiData] = useState();
  const { setErrorStatusCode } = useErrorStatus();

  const _data = api[`use${hook}Query`](params);
  const { data, isError, isFetching, isLoading, status } = _data;

  useEffect(() => {
    console.log("useRtkQuery data ::: ", { _data, status });
    if (isLoading) {
      return setApiStatus(<Spinner scale="0.7" />);
    } else if (isFetching) {
      setApiStatus(<Spinner scale="0.7" />);
    } else if (status === "fulfilled") {
      setApiStatus("");
      setApiData(data);
      setErrorStatusCode(200);
    } else if (isError) {
      setApiStatus("");
      setErrorStatusCode(_data.error.status || _data.error.data);
    }
  }, [status]);

  return { data: apiData, apiStatus };
};

export const useRtkMutation = ({ hook = "", onSuccessHandler = () => {} }) => {
  const [apiStatus, setApiStatus] = useState("");
  const { setErrorStatusCode } = useErrorStatus();
  const mutation = api[`use${hook}Mutation`]();
  const [mutate, { status, isLoading, isError }] = mutation;

  useEffect(() => {
    if (status === "uninitialized") return;
    console.log("useRtkQuery data ::: ", { mutation, status });
    if (isLoading) {
      return setApiStatus(<Spinner fullScreen={true} scale="0.7" />);
    } else if (status === "fulfilled") {
      setApiStatus("");
      setErrorStatusCode(200);
      return onSuccessHandler();
    } else if (isError) {
      setApiStatus("");
      return setErrorStatusCode(mutation[1].error.status);
    }
  }, [status]);
  return [mutate, apiStatus];
};
