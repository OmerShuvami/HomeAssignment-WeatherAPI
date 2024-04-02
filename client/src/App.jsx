import "./App.css";
import WeatherInfo from "./components/weather-info/WeatherInfo.jsx";
import WeatherSearch from "./components/weather-search/WeatherSearch.jsx";
import { ApiContextProvider } from "./context/ApiContext.jsx";

function App() {
  return (
    <ApiContextProvider>
      <main className="container">
        <WeatherSearch />
        <WeatherInfo />
      </main>
    </ApiContextProvider>
  );
}

export default App;
