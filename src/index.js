import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AddToCart from "./FancyButton";

import App from "./App";
const data = ["hello", "hi", "bye", "hey", "hi"];
const listElements = data.map(data => <li>{data}</li>);
ReactDOM.render(
  <div className="m1-5">{listElements}</div>,
  document.getElementById("root")
);
