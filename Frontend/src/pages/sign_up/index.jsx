import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [userName, userUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: userName,
      f_name: firstName,
      l_name: lastName,
      email: email,
      description: description,
      phone: phone,
      age: dob,
    };

    axios
      .post("http://localhost:8080/fusers", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="h-70 md:flex text-align:center  ">
        <div className="relative overflow-hidden md:flex dark:bg-[url('https://as1.ftcdn.net/v2/jpg/02/23/16/66/1000_F_223166646_4HbSAglwB7HNsgb3c3fWMzfNxEBlG3BA.jpg')] i justify-around items-center hidden  bg-cover bg-center w-2/3 ">
          <div>
            <div></div>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>

        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <div className=" lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-5">
            {/* <h3 className="pt-4  text-cyan-700 text-2xl text-center mt-11">
              {" "}
              Create an Account!
            </h3> */}
            <form
              className="px-1 pt-6 pb-8 mb-4 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <h3 className="pt-4  text-cyan-700 text-2xl text-center">
                {" "}
                Create an Account!
              </h3>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 text-left mt-10"
                  htmlFor="username"
                >
                  User Name
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="username"
                  value={userName}
                  onChange={(event) => userUserName(event.target.value)}
                />
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>

                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 text-left"
                  htmlFor="description"
                >
                  About
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  placeholder="About you"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 text-left"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="Phone"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="age"
                  type="number"
                  placeholder="age"
                  value={dob}
                  onChange={(event) => setDob(event.target.value)}
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="animate-bounce  mt-10 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  href="/sign_in"
                  onClick={handleSubmit}
                >
                  Register Account
                </button>
              </div>

              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/sign_in"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
            -
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
