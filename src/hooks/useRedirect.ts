import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const useRedirect = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        } else {
            navigate("/");
        }
    }, [isAuthenticated])
}