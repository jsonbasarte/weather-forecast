import Wrapper from "../../wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import "./Weather.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const Weather = () => {
  const navigate = useNavigate();
  const weather = useSelector((state: RootState) => state.weather);
  return (
    <Wrapper>
      <div className="weather-page-container">
        <p>Weather Page</p>
        <table className="weather-table">
          <thead>
            <th>Date</th>
            <th>Temp(F)</th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </thead>
          <tbody>
            <tr>
              <td>{weather.date}</td>
              <td>{weather.temp}</td>
              <td>{weather.description}</td>
              <td>{weather.main}</td>
              <td>{weather.pressure}</td>
              <td>{weather.humidity}</td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            paddingTop: 100,
          }}
        >
          <button onClick={() => navigate("/home")}>Back</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Weather;
