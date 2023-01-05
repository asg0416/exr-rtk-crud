import { useCallback, useEffect, useMemo, useState } from "react";
import { useErrorStatus } from "../../hooks/useCustomContext";
import instance from "../Api";

// TODO: RTK Query (Customizing queries) 랑 axios 연결해보기,
const useQuery = (url, method) => {
  const [statusCode, setStatusCode] = useState();
  const [apiData, setApiData] = useState();
  const {setErrorStatusCode} = useErrorStatus();
  // console.log('context value useQuery.js :::', setErrorStatusCode);

  const setData = useCallback(
    (data) => {
      setApiData(data);
    },
    []
  );

  useEffect(() => {
    if (!url) return;
    instance[`${method}`](url).then((data) => {
      setStatusCode(data.status);
      setErrorStatusCode(data.status);
      setData([...data.data]);
    }).catch((e) => {
      setStatusCode(e.response.status);
      setErrorStatusCode(e.response.status);
      setData(null);
    });
  }, [url]);


  return {data: apiData, statusCode};
};

export { useQuery };
