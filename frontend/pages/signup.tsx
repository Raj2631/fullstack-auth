import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Input from '../components/Input';
import useAuth from '../components/useAuth';
import Router from 'next/router';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string>();

  const context = useAuth();

  useEffect(() => {
    if (context.authenticated) {
      Router.push('/');
    }
  }, [context]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        'http://127.0.0.1:5000/api/users',
        { name, email, password },
        config
      );
      context.authenticateUser(data?.token);
    } catch (error) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className=" w-96 bg-white p-4 flex flex-col shadow-lg">
        <h1 className="text-2xl pb-4 font-bold text-center">Sign Up</h1>
        {error && (
          <p className="bg-red-500 text-xs p-2.5 mb-2 text-white">{error}</p>
        )}
        <form onSubmit={submitHandler}>
          <Input
            label="Name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            type="text"
          />
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
          <Input
            label="Confirm Password"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
          <button
            className="mb-4 hover:bg-blue-700 focus:outline-none text-sm mx-auto py-2 bg-blue-600 text-white w-full text-center"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/login">
              <a className="text-blue-800 font-semibold hover:underline">
                Log In
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
