import Link from 'next/link';
import Input from '../components/Input';

const Register = () => {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className=" w-96 bg-white p-4 flex flex-col shadow-lg">
        <h1 className="text-2xl pb-4 font-bold text-center">Sign Up</h1>
        <form>
          <Input label="Name" type="text" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <button
            className="mb-4 hover:bg-blue-700 focus:outline-none mx-auto py-2 bg-blue-600 text-white w-full text-center"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{' '}
            <Link href="login">
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

export default Register;