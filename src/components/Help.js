import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Help = () => {


  return (
  <div className="menu-container">
    <Link to="/">
      <Button children="Go Back"/>
    </Link>
    
  </div>  
  );
};