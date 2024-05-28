import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Menu = () => {

  return (
  <div className="menu-container">
    <Link to="/createtask">
      <Button children="Create Tasks" buttonClass="btn menu"/>
    </Link>
    <Link to="/help">
      <Button children="Help" buttonClass="btn menu"/>
    </Link>
    <Link to="/exit">
      <Button children="Exit" buttonClass="btn menu"/>
    </Link>
  </div>  
  );
};