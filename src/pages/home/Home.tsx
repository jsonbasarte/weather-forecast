import "./Home.css";
import Wrapper from "../../wrapper/Wrapper";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user } = useAuth0();
  return (
    <Wrapper>
      <div className="home-container">
        <p>{user?.name}</p>
        <p>https://github.com/jsonbasarte</p>
        <input placeholder="City" style={{ width: 400 }} />
        <button style={{ width: 200, marginTop: 50 }}>Display Weather</button>
      </div>
    </Wrapper>
  );
};

export default Home;
