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
      <div className="w-full flex flex-row align-middle items-center justify-center my-5">
        <p className="mx-5">
          hello <b>{email}</b>
        </p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
      <div className="w-full flex flex-col align-middle items-center justify-center my-auto">
        <p className="text-3xl my-3">{value}</p>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleFetch}
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default Home;
