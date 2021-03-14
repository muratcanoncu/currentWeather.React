import React from "react";
import WeatherInfo from "./weatherInfo";
import Background from "./background.jpeg";
function container() {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "580px",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 120vh",
      }}
    >
      <WeatherInfo></WeatherInfo>
    </div>
  );
}

export default container;
