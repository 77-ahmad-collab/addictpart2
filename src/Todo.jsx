import React, { useState } from "react";
import Display from "./Display";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Todo = () => {
  const [myname, setname] = useState("");
  const [item, setitem] = useState("");
  const [people, setpeople] = useState([]);
  const callme = (e) => {
    setname(e.target.value);
  };
  const callmeitem = (e) => {
    setitem(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const peopleme = { myname, item };
    // console.log(peopleme);
    setpeople((prev) => {
      return [...prev, peopleme];
    });
    setname("");
    setitem("");
  };
  // console.log(people);
  return (
    <>
      <form onSubmit={handlesubmit} autoComplete="off">
        <div>
          <h2>Todo App</h2>
          <br />
          <input
            type="text"
            onChange={callme}
            name="name"
            value={myname}
            placeholder="your name"
          />
          <br />
          <input
            type="text"
            onChange={callmeitem}
            name="item"
            value={item}
            placeholder="Add a item"
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handlesubmit}
          >
            Add Item
          </button>
        </div>
      </form>
      <Display peoplepass={people} />
    </>
  );
};

export default Todo;
