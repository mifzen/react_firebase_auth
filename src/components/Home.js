const Home = (props) => {
  return (
    <div>
      <p>
        hello <b>{props.email}</b>
      </p>
      <button onClick={props.logOut}>Logout</button>
    </div>
  );
};

export default Home;
