import React, { useReducer, useEffect } from "react";
const UserContext = React.createContext();
const initialState = {
  cityName: "",
  dataBase: [],
  dataLoaded: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CITY_ENTERED":
      return {
        ...state,
        cityName: action.payload,
      };
    case "CITY_SEARCHED":
      return {
        ...state,
        dataLoaded: true,
      };
    case "CITY_WEATHER":
      return {
        ...state,
        dataBase: [action.payload],
      };
    case "NOCITY_WEATHER":
      return {
        ...state,
        dataBase: [],
        dataLoaded: false,
      };
    default:
      return state;
  }
};
export function ContextProvider(props) {
  const [myState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${myState.cityName}&appid=e6297ad1e1f3b7a35b749ff2967e9270`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.cod == "404") {
          dispatch({
            type: "NOCITY_WEATHER",
            payload: [],
          });
        } else {
          dispatch({
            type: "CITY_WEATHER",
            payload: data,
          });
        }
      });
  }, [myState.cityName]);
  // console.log(myState);
  return (
    <UserContext.Provider
      value={{ contextState: myState, contextDispatch: dispatch }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
