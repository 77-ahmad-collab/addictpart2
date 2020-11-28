import React from "react";

const Display = (props) => {
  const pass = () => {};

  return (
    <div>
      <li>my name is ahmad and my item is </li>
      <button className="btn btn-primary" onClick={pass}>
        ple
      </button>
      {props.peoplepass.map((val, index) => {
        return (
          <li key={index}>
            my name is {val.name} and item is {val.item}
          </li>
        );
      })}
    </div>
  );
};

export default Display;
