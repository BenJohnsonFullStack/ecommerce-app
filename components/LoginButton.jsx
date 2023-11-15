import { signIn } from "@/app/api/auth/[...nextauth]";

const LoginButton = () => {
  return (
    <div>
      <button
        className="bg-red-300 rounded-md px-4 py-1 hover:bg-red-700 transition-color duration-200 my-6"
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
