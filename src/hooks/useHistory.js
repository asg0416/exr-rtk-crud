import { useNavigate } from "react-router-dom";

export const useHistory = (path) => {
  const navi = useNavigate();
  if (path) return () => navi(path);
  else return navi;
};
