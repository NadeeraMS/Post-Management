import React, { useState } from "react";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      console.log(response.data); // Do something with the response
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" sign  bg-gray-50 dark:bg-[url('https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover  w-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://www.freeiconspng.com/img/38780"
            alt="logo"
          ></img>
          Project Manusathkama
        </a> */}
        <div className="w-full bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 opacity-95 dark:border-gray-300">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl  font-bold leading-tight tracking-tight text-cyan-00 md:text-2xl dark:text-cyan">
              Sign in to your account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-white-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                      required=""
                    ></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-500"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Sign in
              </button>

              <div className="text-sm font-light text-gray-500 dark:text-gray-700">
                Don’t have an account yet?{" "}
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/sign_up"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignIn;
