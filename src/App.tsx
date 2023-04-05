import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import { useRedirect } from "./hooks/useRedirect";

function App() {
  // Redirect to home page if authenticated 
  useRedirect();

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
