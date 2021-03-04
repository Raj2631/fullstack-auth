import type { AppProps } from 'next/app';
import AuthContextProvider from '../context/AuthContext';

import '../styles/base.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
