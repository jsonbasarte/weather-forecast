import "./Navbar.css";
import viteLogo from "../assets/react.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        Weather Forecast
      </div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
