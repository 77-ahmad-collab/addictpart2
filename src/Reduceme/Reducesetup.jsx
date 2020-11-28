import React, { useEffect, useReducer, useState } from "react";
import Showmodel from "./Showmodel";
const Reducesetup = () => {
  const [name, setname] = useState("");
  //---iT is the reducer setup-----------
  const reducer = (state, action) => {
    //console.log(state);
    if (action.type === "ADD") {
      // console.log("dis");
      const newpeep = [...state.people, action.payload];
      //console.log(newpeep);
      return {
        ...state,
        people: newpeep,
        ismodelopen: true,
        modelcontent: "Item is being added",
      };

      //setname("");
    }
    if (action.type === "NO_VALUE") {
      return {
        ...state,
        ismodelopen: true,
        modelcontent: "Please enter the value",
      };
    }
    if (action.type === "TIMER") {
      return {
        ...state,
        ismodelopen: false,
      };
    }
    if (action.type === "REMOVE") {
      const newme = state.people.filter((data) => {
        return data.id !== action.payload;
      });

      return {
        ...state,
        people: newme,
        ismodelopen: true,
        modelcontent: "removed this item",
      };
    }
    throw new Error("please check me");
  };
  const defaultstate = {
    people: [],
    ismodelopen: false,
    modelcontent: "helloo",
  };
  const [State, Dispatch] = useReducer(reducer, defaultstate);
  const handleinput = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setname(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      const mylist = {
        id: new Date().getTime(),
        myname: name,
      };
      Dispatch({ type: "ADD", payload: mylist });
      setname("");
    } else {
      Dispatch({ type: "NO_VALUE" });
    }
  };
  const mytimer = () => {
    Dispatch({ type: "TIMER" });
  };
  useEffect(() => {
    setTimeout(mytimer, 8000);
  });
  // console.log(State.people);
  const removeme = (id) => {
    console.log(id);
    Dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div className="bg-success">
      <form onSubmit={handlesubmit}>
        <h2>Todo Using reduce</h2>
        {State.ismodelopen && <Showmodel content={State.modelcontent} />}
        <input
          type="text"
          placeholder="add an item"
          onChange={handleinput}
          value={name}
        />
        <button type="submit" className="btn btn-warning ">
          Add
        </button>
      </form>
      {State.people.map((pre) => {
        return (
          <li key={pre.id}>
            {pre.myname}
            <button className="btn btn-danger" onClick={() => removeme(pre.id)}>
              remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Reducesetup;
