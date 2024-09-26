import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrific", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      size={100}
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
