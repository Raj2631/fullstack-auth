import { createContext, useState } from 'react';

type User = {
  id: number;
};

type AuthContext = {
  authenticated: boolean;
  user: User | undefined;
  authenticateUser: ({}: AuthContext) => void;
};

export const authContext = createContext<AuthContext | undefined>(undefined);

const AuthContextProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const authenticateUser = ({ authenticated, user }: AuthContext) => {
    setAuthenticated(authenticated);
    setUser(user);
  };

  return (
    <authContext.Provider value={{ authenticated, user, authenticateUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
