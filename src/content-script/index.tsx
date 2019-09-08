import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountPoint = document.createElement("div");
mountPoint.id = "root";
document.body.prepend(mountPoint);
ReactDOM.render(<App />, mountPoint);
