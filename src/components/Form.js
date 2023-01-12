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
    <div className="flex flex-col items-center my-10">
      <div className="w-full max-w-xs center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-center">
            {formType === "login" ? "Login" : "Sign Up"}
          </h2>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
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
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
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
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
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
          <div
            className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded focus:outline-none focus:shadow-outline"
            onClick={() =>
              setFormType(formType === "login" ? "signup" : "login")
            }
          >
            <button>
              {formType === "login" ? "SIGN UP NOW" : "Already have an account"}
            </button>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;
