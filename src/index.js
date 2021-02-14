import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";
import { Provider } from "./context/context";

import App from "./App";

ReactDOM.render(
  <SpeechProvider appId="929d16da-d3b0-4894-b8a6-409f92793732" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
