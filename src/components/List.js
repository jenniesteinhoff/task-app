import React, { useState }from "react";
import { Item } from "./Item";

export const List = ({ todo, handleDelete }) => {
  if (!todo || todo.length === 0) {
    return <p>No Todo's yet!</p>
  }

  return (
  <div className="todo-list">
    {todo.map((item) => (
      <Item key={item.id} todo={item} handleDelete={handleDelete}/>
    ))}
  </div>
  );
};