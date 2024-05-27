import React, {useState} from "react";
import { Button } from "./Button";

export const Username = ({ addUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      username,
    };

    if (newUser.username === "") {
      alert("Not a valid input")
    }
    else {
    addUser(newUser);
    console.log(newUser);
    setUsername("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-username">
      <h3>Add username</h3>
      <label className="username-label">
        <input maxLength={12} value={username} type="text" placeholder="Name your task" onChange={(e) => setUsername(e.target.value)}/>
        <Button type="submit">Submit</Button>
      </label>
    </form>
  )
};