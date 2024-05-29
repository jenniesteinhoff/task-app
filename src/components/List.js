import React from "react";
import { Item } from "./Item";

export const List = ({ todo, handleDelete }) => {
  //clarification for when length of amount of tasks = 0
  if (!todo || todo.length === 0) {
    return <div className="todo-list empty"><p>No Todo's yet!</p></div>
  }
  return (
  
  <div className="todo-list">
    {/*assign id number to key, .map function to render all arrays(tasks) created */}
    {todo.map((item) => (
      <Item key={item.id} todo={item} handleDelete={handleDelete}/>
    ))}
  </div>
  );
};