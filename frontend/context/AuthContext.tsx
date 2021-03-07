import { createContext, ReactNode, useState } from 'react';

type AuthContext = {
  authenticated: boolean;
  authenticateUser: (userToken: string) => void;
  logout: () => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContext | undefined>(undefined);
let state = false;

if (typeof window !== 'undefined') {
  const userToken = localStorage.getItem('UserToken');
  if (userToken) {
    state = true;
  }
}
const AuthContextProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(state);

  const authenticateUser = (userToken: string) => {
    localStorage.setItem('UserToken', JSON.stringify(userToken));
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('UserToken');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, authenticateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
