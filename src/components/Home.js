import React, { useState, useEffect } from "react";

const Home = (props) => {
  const { email, logOut } = props;
  const [value, setValue] = useState(0);
  const handleFetch = async () => {
    const response = await fetch("/.netlify/functions/increment", {
      method: "POST",
      body: JSON.stringify({ value }),
    });
    const data = await response.json();
    setValue(data);
  };

  return (
    <div>
      <p>
        hello <b>{email}</b>
      </p>
      <button onClick={logOut}>Logout</button>
      <p>{value}</p>
      <button onClick={handleFetch}>increment</button>
    </div>
  );
};

export default Home;
