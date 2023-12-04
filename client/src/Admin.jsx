import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "admincet" && password === "admin12345") {
      console.log(username);
      console.log(login);
      
      setLogin(true);
      navigate("/admindashboard");
    } else {
      setLogin(false);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16 ">
      <h1 className="text-8xl font-extrabold tracking-tight leading-none md:text-8xl h-28 xl:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-blue-500">
        Admin Page
      </h1>
      <div className="w-full max-w-xs">
        <form
          className="bg-sky-100 shadow-md rounded h-80 px-8 pt-6 pb-8 mb-4 "
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Admin ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">Username and password do not match.</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
