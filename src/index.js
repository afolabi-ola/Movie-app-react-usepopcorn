import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating.js";
import "./index.css";
import App from "./App";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
    {/* <StarRating color="red" size={24} /> */}
  </React.StrictMode>
);
