import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  authToken?: string;
}

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
