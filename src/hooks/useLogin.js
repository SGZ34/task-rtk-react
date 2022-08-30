import { useSelector } from "react-redux";

export const useLogin = () => {
  const login = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  return { login, user };
};
