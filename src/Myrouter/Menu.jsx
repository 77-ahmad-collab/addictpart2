import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/proptest">
        Testing
      </NavLink>
    </div>
  );
};

export default Menu;
