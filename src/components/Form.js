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
    <form onSubmit={handleSubmit}>
      <h2>{formType === "login" ? "Login" : "Sign Up"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {formType === "signup" && (
        <input type="password" placeholder="Confirm Password" required />
      )}
      <button type="submit">
        {formType === "login" ? "Login" : "Sign Up"}
      </button>
      <div
        onClick={() => setFormType(formType === "login" ? "signup" : "login")}
      >
        <button>
          {formType === "login"
            ? "Create an account"
            : "Already have an account"}
        </button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Form;
