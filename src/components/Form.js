import React, { useState } from "react";
import app from "../base";

const Form = (props) => {
  const { changeStatus, updateEmail } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formType === "login") {
        await app.auth().signInWithEmailAndPassword(email, password);
        changeStatus(true);
        updateEmail(email);
        setError("");
      } else {
        await app.auth().createUserWithEmailAndPassword(email, password);
        setError("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const [formType, setFormType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col items-center my-10 ">
      <div className="w-full max-w-xs center">
        <div className="flex flex-row shadow-md bg-white py-5 rounded-t-lg">
          <button
            className={
              formType === "signup"
                ? "mx-auto bg-blue-300 bg-opacity-75 px-5 py-2 rounded-md"
                : "mx-auto px-5 hover:bg-blue-100 rounded-md"
            }
            onClick={() => setFormType("signup")}
          >
            Sign Up
          </button>
          <button
            className={
              formType === "login"
                ? "mx-auto bg-blue-300 bg-opacity-75 px-5 py-2 rounded-md"
                : "mx-auto px-5 hover:bg-blue-100 rounded-md"
            }
            onClick={() => setFormType("login")}
          >
            Login
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white shadow-md rounded-b-lg px-8 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {formType === "signup" && (
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {formType === "login" ? "Login" : "Sign Up"}
          </button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;
