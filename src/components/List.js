import React from "react";
import { Item } from "./Item";

export const List = ({ todo, handleDelete }) => {
  if (!todo || todo.length === 0) {
    return <div className="todo-list empty"><p>No Todo's yet!</p></div>
  }
  return (
  
  <div className="todo-list">
    {todo.map((item) => (
      <Item key={item.id} todo={item} handleDelete={handleDelete}/>
    ))}
  </div>
  );
};