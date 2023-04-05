import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  return <>{isAuthenticated ? children : null}</>;
};

export default ProtectedRoute;
