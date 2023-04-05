import "./Home.css";
import Wrapper from "../../wrapper/Wrapper";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetchWeather } from "./hooks/useFetchWeather";
const Home = () => {
  const { user } = useAuth0();
  const { fetchWeather, setCity } = useFetchWeather();
  return (
    <Wrapper>
      <div className="home-container">
        <p>{user?.name}</p>
        <p>https://github.com/jsonbasarte</p>
        <input placeholder="City" style={{ width: 400 }} onChange={(e) => setCity(e.target.value)} />
        <button style={{ width: 200, marginTop: 50 }} onClick={() => fetchWeather()}>Display Weather</button>
      </div>
    </Wrapper>
  );
};

export default Home;
