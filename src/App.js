import React, { useState } from "react";
import Form from "./components/Form";
import Home from "./components/Home.js";

const AuthForm = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");

  const logOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Home logOut={logOut} email={email} />
      ) : (
        <Form changeStatus={setIsAuthenticated} updateEmail={setEmail} />
      )}
    </div>
  );
};

export default AuthForm;
