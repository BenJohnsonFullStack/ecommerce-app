import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div
          id="login-card"
          className="w-[min(100%-2em,20rem)] shadow-lg bg-gray-100 px-2 py-6 text-center my-20 mx-auto rounded-lg ring-1 ring-black"
        >
          <div>
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <h3 className="text-sm">Please login to your account.</h3>
          </div>

          <div>
            <form className="py-6">
              <div>
                <div className="py-2 flex flex-col">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-2 border-black w-2/3 mx-auto"
                  />
                </div>

                <div className="py-2 flex flex-col">
                  <label htmlFor="password">Account Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 border-black w-2/3 mx-auto"
                  />
                </div>

                <div>
                  <button className="bg-red-300 rounded-md px-4 py-1 hover:bg-red-700 transition-color duration-200 my-6">
                    Login
                  </button>
                </div>

                <div>
                  <button className="bg-black text-white rounded-md px-4 py-1 hover:bg-gray-700 transition-color duration-200">
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
