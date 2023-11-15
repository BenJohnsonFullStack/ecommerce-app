import { useFormStatus } from "react-dom";

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        className="bg-red-300 rounded-md px-4 py-1 hover:bg-red-700 transition-color duration-200 my-6"
        aria-disabled={pending}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
