import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, type, isDisabled, buttonClass }) => {
  return (
  <button type={type} disabled={isDisabled} className={buttonClass}>
    {children}
  </button>
  );
};

Button.defaultProps = {
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};