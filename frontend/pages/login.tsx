import Link from 'next/link';
import Input from '../components/Input';
import axios from 'axios';

const Login = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Button Clicked');
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className=" w-96 bg-white p-4 flex flex-col shadow-lg">
        <h1 className="text-2xl pb-4 font-bold text-center">Log In</h1>
        <form onSubmit={submitHandler}>
          <Input label="Email" required type="email" />
          <Input label="Password" required type="password" />
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
