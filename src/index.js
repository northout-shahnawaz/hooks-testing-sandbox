import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";

const rootElement = document.getElementById("root");
ReactDOM.render(<Loading showAfterDelay={500} />, rootElement);
