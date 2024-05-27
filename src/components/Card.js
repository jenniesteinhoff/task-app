import React from "react";
import PropTypes from "prop-types";

export const Card = ({ children }) => {
  return (
  <div className="todo-card">
  
  {children}
  </div>
  );
};


Card.defaultProps = {
  reverse: false,
  create: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  create: PropTypes.bool,
};