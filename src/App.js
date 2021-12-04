import React, { useState } from "react";

import "./styles.css";
var color = "red";
export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function clickHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
    console.log("likeCounter", newLikeCounter);
  }
  return (
    <div className="App">
      <button onClick={clickHandler}> click me</button> {likeCounter}
    </div>
  );
}
