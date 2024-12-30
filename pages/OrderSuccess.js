import React from "react";
import { useEffect, useState } from "react";

const myState = history.state;//store the state variable outside the component

export default function OrderSuccess() {
  const [routeState, setRouteState] = useState({});

  useEffect(() => {
    setRouteState(myState);
    console.log(routeState)
  }, []);

  return <h1>{routeState.result}</h1>;
}