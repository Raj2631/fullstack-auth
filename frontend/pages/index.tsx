import Router from 'next/router';
import { useEffect } from 'react';
import useAuth from '../components/useAuth';

function Homepage() {
  const context = useAuth();

  useEffect(() => {
    if (!context.authenticated) {
      Router.push('/login');
    }
  }, [context]);

  return (
    <>
      <h1 className="text-center my-24 font-black tracking-tight text-6xl">
        Hey! You are now logged in.
      </h1>
      <button
        className="mb-4 hover:bg-blue-700 focus:outline-none mx-auto py-2 bg-blue-600 text-white w-full text-center"
        onClick={() => context.logout()}
      >
        Logout
      </button>
    </>
  );
}

export default Homepage;
