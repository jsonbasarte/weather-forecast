import React from "react";
import "./LandingPage.css"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="landing-page-container">
        <p>
          {" "}
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city
        </p>

        <button onClick={() => navigate("/home")}>Login</button>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
