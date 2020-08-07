import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";
import { observe } from "./Game";

import * as serviceWorker from "./serviceWorker";


const root = document.getElementById("root");

observe((knightPosition) =>
  ReactDOM.render(
    <React.StrictMode>
      <Board knightPosition={knightPosition} />
    </React.StrictMode>,
    root
  )
);

serviceWorker.unregister();
