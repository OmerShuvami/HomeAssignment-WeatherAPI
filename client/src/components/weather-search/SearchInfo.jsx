import "../../styles/weather-search/search-info.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { format } from "date-fns";

function SearchInfo() {
  // useContext
  const {
    weatherCurrent,
    weatherLocation,
  } = useContext(ApiContext);

  return (
    <>
      {weatherLocation && weatherCurrent ? (
        <div className="additional-info">
          <p>
            <span>latitude {weatherLocation.lat}</span>{" "}
            <span>longitude {weatherLocation.lon}</span>
          </p>
          <p>
            accurate to {format(weatherCurrent.last_updated, "dd/MM/yyyy")} at{" "}
            {format(weatherCurrent.last_updated, "HH:mm")}
          </p>
        </div>
      ) : (
        <div className="additional-info">
          <p>
            <span>latitude - - . - -</span> <span>longitude - - . - -</span>
          </p>
          <p>accurate to - - / - - / - - at - - : - - </p>
        </div>
      )}
    </>
  );
}

export default SearchInfo;
