import React from "react";

function template(props) {
  return (
    <div style={{ color: "white", marginTop: "70px" }}>
      <h1 style={{ marginBottom: "30px" }}>
        {props.cityName} [{props.country}]
      </h1>
      <p>{props.description}</p>
      <h1 style={{ fontSize: "2.6rem" }}>{props.grad}°</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "125px",
          margin: "0 auto",
          fontSize: "1.3rem",
        }}
      >
        <p>H: {props.highest}° </p>

        <div>L: {props.lowest}°</div>
      </div>
      <p style={{ fontSize: "1.2rem" }}>Wind: {props.wind} Km/H</p>
    </div>
  );
}

export default template;
