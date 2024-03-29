import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ErrorStatusContext } from "../../hooks/useCustomContext";
import { ErrorPage404 } from "./ErrorPage404";
import { ErrorPage500 } from "./ErrorPage500";

export const ErrorHandler = ({ children }) => {
  let location = useLocation();
  const [statusCode, setErrorStatusCode] = useState();

  useEffect(() => {
    return () => setErrorStatusCode(undefined);
  }, [location]);

  const renderContent = () => {
    console.log("error handler line 16 ::", statusCode);

    if (statusCode === 500) {
      return <ErrorPage500 />;
    }

    if (statusCode === "Network Error") {
      return <ErrorPage404 message={statusCode} />;
    }

    if (statusCode === 404) {
      return <ErrorPage404 />;
    }

    return children;
  };

  // 하위 컴포넌트 들에서 상태코드를 설정할 수 있게 함수를 컨텍스트 값으로 보내줌
  // 이 코드 있으면 웹소켓 에러 계속 뜸..
  // const contextPayload = useMemo(() => ({ setErrorStatusCode }), [setErrorStatusCode]);

  return (
    <ErrorStatusContext.Provider value={{ setErrorStatusCode }}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  );
};

export default ErrorHandler;
