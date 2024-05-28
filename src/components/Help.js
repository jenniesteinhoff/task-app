import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Help = () => {


  return (
  <div className="help-container">
      <h3>Tips</h3>
      <div className="help-icons">
        <FontAwesomeIcon className="help-icon complete" icon={faCircleCheck} size="2xl" />
        <p>Completed</p>
        <FontAwesomeIcon className="help-icon incomplete" icon={faCircleXmark} size="2xl" />
        <p>Not finished</p>
        <FontAwesomeIcon className="help-icon" icon={faTrashCan} size="2xl" />
        <p>Remove/Delete task</p>
      </div>

    <Link to="/">
      <Button children="Go Back" buttonClass="btn help"/>
    </Link>
  </div>
  );
};