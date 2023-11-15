"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { createAccount } from "@/lib/actions";

const Page = () => {
  const initialState = { message: null };
  const [state, dispatch] = useFormState(createAccount, initialState);

  return (
    <>
      <Header />
      <main>
        <div
          id="create-account-card"
          className="w-[min(100%-2em,20rem)] shadow-lg bg-gray-100 px-2 py-6 text-center my-20 mx-auto rounded-lg ring-1 ring-black"
        >
          <div>
            <h2 className="text-2xl font-bold">Hello!</h2>
            <h3 className="text-sm">Sign Up Today</h3>
          </div>

          <div>
            <form className="pt-6 pb-2" action={dispatch}>
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
                  <label htmlFor="password">Choose Your Password</label>
                  <p className="text-sm text-gray-700 italic">
                    Must be at least 6 characters
                  </p>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 border-black w-2/3 mx-auto"
                  />
                </div>

                <div>
                  {state && (
                    <>
                      <p className="text-sm text-red-500" aria-live="polite">
                        {state}
                      </p>
                    </>
                  )}
                </div>
                <div>
                  <button className="bg-black text-white rounded-md px-4 py-1 mb-4 hover:bg-gray-700 transition-color duration-200">
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

export default Page;
