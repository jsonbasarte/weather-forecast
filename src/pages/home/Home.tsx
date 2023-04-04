import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-container">
        <p>Jason Basarte</p>
        <p>https://github.com/jsonbasarte</p>
        <input placeholder="City" style={{ width: 400 }}/>
        <button style={{ width: 200, marginTop: 50 }}>Display Weather</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
