import Input from '../components/Input';

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className=" w-96 bg-white p-4 flex flex-col shadow-lg">
        <h1 className="text-2xl pb-4 font-bold text-center">Log In</h1>
        <form>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <button
            className="mb-4 focus:outline-none mx-auto py-2 bg-blue-600 text-white w-full text-center"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
