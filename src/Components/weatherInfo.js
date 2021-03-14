import React, { useState, useContext } from "react";
import UserContext from "../context/Context";
import TemplateCity from "./template";
function weatherInfo() {
  // const [city, setCity] = useState("");
  const context = useContext(UserContext);
  // const cityName = (e) => {
  //   setCity(e.target.value);
  // };
  const showWeather = (dispatch) => {
    dispatch({
      type: "CITY_SEARCHED",
    });
  };
  // console.log(context.contextState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "45vh",
        paddingTop: "140px",
        width: "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Please Enter A City Name"
          style={{
            borderRadius: "10px",
            border: "none",
          }}
          onChange={(e) => {
            context.contextDispatch({
              type: "CITY_ENTERED",
              payload: e.target.value,
            });
          }}
        ></input>
        <button
          style={{
            marginLeft: "20px",
            padding: "8px 17px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bolder",
          }}
          onClick={() => showWeather(context.contextDispatch)}
        >
          SEARCH
        </button>
      </div>
      {context.contextState.dataBase.map((city) => {
        if (context.contextState.dataLoaded) {
          // console.log(city);
          return (
            <TemplateCity
              key={city.id}
              cityName={city.name}
              country={city.sys.country}
              description={city.weather[0].description}
              grad={(city.main.temp - 273.15).toFixed()}
              highest={(city.main.temp_max - 273.15).toFixed()}
              lowest={(city.main.temp_min - 273.15).toFixed()}
              wind={city.wind.speed}
            ></TemplateCity>
          );
        } else {
          null;
        }
      })}
    </div>
  );
}

export default weatherInfo;
