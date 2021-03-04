import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  return context;
};

export default useAuth;
