import React from "react";
import { Link } from "react-router-dom";
import { CreateTask } from "./CreateTask";
import { Button } from "./Button";
import { Username } from "./Username";

export const Menu = () => {

  return (
  <div className="menu-container">

    <Username/>

    <Link to="/createtask">
      <Button children="Create Tasks"/>
    </Link>
    <Link to="/help">
      <Button children="Help"/>
    </Link>
    <Link to="/exit">
      <Button children="Exit"/>
    </Link>
  </div>  
  );
};