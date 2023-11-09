import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div
          id="login-card"
          className="w-[min(100%-2em,20rem)] shadow-lg bg-gray-200 px-2 py-6 text-center my-20 mx-auto"
        >
          <div>
            <h2>Welcome Back!</h2>
            <h3>Please login to your account.</h3>
          </div>

          <div>
            <form>
              <div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-2 border-black w-2/3 mx-auto"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password">Account Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 border-black w-2/3 mx-auto"
                  />
                </div>

                <div>
                  <button>Login</button>
                </div>

                <div>
                  <p>-- OR --</p>
                </div>

                <div>
                  {/* GOOGLE LOGIN BUTTON */}
                  {/* GITHUB LOGIN BUTTON */}
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
