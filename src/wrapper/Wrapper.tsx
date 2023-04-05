import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface IProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default Wrapper;