import React from "react";
import PropTypes from "prop-types";

const Proptest = (props) => {
  return <div></div>;
};

Proptest.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
};
Proptest.defaultprop = {
  image: "djhd",
};

export default Proptest;
