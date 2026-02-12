import React from "react";
import "./Add.css";
import { useState } from "react";

function Add() {
  const [numb, setNumb] = useState([]);
  const [value, setValue] = useState("");
  const input = (e) => {
    e.preventDefault()
    if (value > 0 && value < 50) {
      setNumb([...numb, value]);
      setValue("");
    } else {
      alert("Enter number between 0 and 50");
    }
  };
  // ?fdvm
  // @bgllg 
  // todo
  return (
    <div className="container">
      <div className="form">
        <form>
          <input
            type="text"
            value={value}
            placeholder="Enter number between 0 and 50"
            onChange={(e) => setValue(e.target.value)}
          />
          <button id="add-btn" onClick={input} >
            Add
          </button>
        </form>
      </div>
      <div>
        <p>{numb.join(", ")}</p>
      </div>
    </div>
  );
}

export default Add;
