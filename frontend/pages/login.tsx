import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Input from '../components/Input';
import axios from 'axios';
import useAuth from '../components/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useAuth();

  useEffect(() => {
    if (context.authenticated) {
      Router.push('/');
    }
  }, [context]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://127.0.0.1:5000/api/users/login',
      { email, password },
      config
    );
    context.authenticateUser(data?.token);
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className=" w-96 bg-white p-4 flex flex-col shadow-lg">
        <h1 className="text-2xl pb-4 font-bold text-center">Log In</h1>
        <form onSubmit={submitHandler}>
          <Input
            label="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            label="Password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            className="mb-4 hover:bg-blue-700 focus:outline-none mx-auto py-2 bg-blue-600 text-white w-full text-center"
            type="submit"
          >
            Log In
          </button>
          <p className="text-center">
            Don&#39;t have an account?{' '}
            <Link href="register">
              <a className="text-blue-800 font-semibold hover:underline">
                Sign Up
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
