import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
