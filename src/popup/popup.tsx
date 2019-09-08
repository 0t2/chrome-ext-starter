import * as React from "react";
import { render } from "react-dom";
import "./popup.scss";

const Popup: React.FC = () => {
  return <h1>Hello Popup!</h1>;
};

export default Popup;

render(<Popup />, document.getElementById("root"));
