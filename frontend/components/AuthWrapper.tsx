import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import useAuth from './useAuth';

type Props = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const router = useRouter();
  const { authenticated } = useAuth();

  if (
    authenticated &&
    process.browser &&
    (router.pathname === '/login' || router.pathname === '/signup')
  ) {
    router.replace('/');
  }

  if (
    !authenticated &&
    process.browser &&
    router.pathname !== '/login' &&
    router.pathname !== '/signup'
  ) {
    router.replace('/login');
  }
  return <>{authenticated && children}</>;
};

export default AuthWrapper;
