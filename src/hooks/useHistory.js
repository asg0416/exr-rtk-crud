import { useNavigate } from "react-router-dom";

export const useHistory = (path) => {
  const navi = useNavigate();
  return () => navi(path);
};
