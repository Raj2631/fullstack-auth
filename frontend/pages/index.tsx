import Router from 'next/router';
import { useEffect } from 'react';

function Homepage() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/login');
    }
  });

  return (
    <h1 className="text-center my-24 font-black tracking-tight text-6xl">
      Our homepage
    </h1>
  );
}

export default Homepage;
