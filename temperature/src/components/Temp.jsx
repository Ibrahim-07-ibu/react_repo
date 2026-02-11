import React from "react";
import "./temp.css";
import { useState } from "react";

function Temp() {
  const [temp, setTemp] = useState(0);
  const BoxStyle = {
    border :"3px solid black",
    backgroundColor:"#FFE2A8",
    borderRadius: "10px"
};
// const [counts, setCounts] = useState([0]);
  return (
    <div className="">
      <h2> Select your Range Temperature </h2>
      <input
        type="number"
        placeholder="Enter Temperture"
        onChange={(e) => setTemp(e.target.value)}
      />
      <div style={BoxStyle}>
        <h2>Your Current temperature is {temp}</h2>
        <button >Inc</button>
        <button>Dec</button>
      </div>
    </div>
  );
}

export default Temp;
