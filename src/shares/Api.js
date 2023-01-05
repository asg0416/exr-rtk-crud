import axios from "axios";

/**
 * axios 설정 파일입니다.
 *
 * @author 이수진
 * @since 2021-12-10
 */

// axios 통신의 기본 주소, 쿠키 설정, 기본 헤더를 설정합니다.
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  },
});

// 통신 요청 중간에서 헤더에 토큰을 삽입합니다.
// instance.interceptors.request.use((config) => {
//   config.headers.Accept = "application/json";
//   return config;
// });

// 요청 후 응답 결과에 따라 에러처리를 합니다.
instance.interceptors.response.use(
  (response) => {
    // 예외처리를 위한 응답 result 의 에러를 포함합니다.
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log("api interceptor error ::: ", { error, message });
    console.log("axios : interceptor-response ::: ", message);

    return Promise.reject(error);
  }
);

export default instance;
