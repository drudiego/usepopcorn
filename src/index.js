import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRaing";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>This movie received a {movieRating} rating.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      size={90}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
