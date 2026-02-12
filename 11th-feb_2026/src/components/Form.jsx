import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <div>
        <form>
          <div>
            <input placeholder="enter your name" type="text" id="username" />
          </div>
          <br />
          <div>
            <input placeholder="enter your email" type="email" />
          </div>
          <br />
          <div>
            <input placeholder="enter your mobile number" type="text" />
          </div>
          <br />
          <div>
            <input placeholder="enter your city" type="text" />
          </div>
          <br />
          <div>
            {/* checkbox */}
            <div>
              {/* breakfast */}
              <input type="checkBox" id="Breakfast"></input>
              <label htmlFor=""> BreakFast </label>
            </div>
            <br />
            <div>
              {/* lunch */}
              <input type="checkBox" id="lunch"></input>
              <label htmlFor=""> Lunch </label>
            </div>
            <br />
            <div>
              {/* dinner */}
              <input type="checkBox" id="dinner"></input>
              <label htmlFor=""> Dinner</label>
            </div>
            <br />
          </div>
          <br />
          <div>
            <button> Submit</button>
          </div>
        </form>
        <div>
          <br/>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Skill</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody id="body"></tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Form;
