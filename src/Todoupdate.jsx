import React, { useRef, useState } from "react";
import Display from "./Display";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Showmodal = () => {
  return <h1>Item added</h1>;
};
const Todoupdate = () => {
  const [show, setshow] = useState(false);
  const [item, setitem] = useState({
    name: "",
    item: "",
  });
  const refitem = useRef(null);
  const [finalitem, setfinalitem] = useState([]);
  const callme = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setitem((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (e) => {
    setshow(true);
    e.preventDefault();
    console.log(refitem);
    console.log("i am submiting", item.name);
    if (item.name !== "") {
      setfinalitem((pree) => {
        return [...pree, item];
      });
    }

    console.log(item);
  };
  console.log(finalitem);
  return (
    <>
      {show && <Showmodal />}
      <div>
        <form onSubmit={handlesubmit} autoComplete="off">
          <div>
            <h2 ref={refitem}>Todo App</h2>
            <br />
            <input
              type="text"
              onChange={callme}
              name="name"
              placeholder="your name"
            />
            <br />
            <input
              type="text"
              onChange={callme}
              name="item"
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
      </div>
      <Display peoplepass={finalitem} />
    </>
  );
};

export default Todoupdate;
