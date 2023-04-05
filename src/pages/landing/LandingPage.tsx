import "./LandingPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../wrapper/Wrapper";

const LandingPage = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <Wrapper>
      <div className="landing-page-container">
        <p>
          {" "}
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city
        </p>

        {!isAuthenticated ? (
          <button onClick={() => loginWithPopup()}>Login</button>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default LandingPage;
