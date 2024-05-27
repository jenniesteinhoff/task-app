import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { List } from "./List";
import { todoData } from "./data/Todo";
import { Form } from "./Form";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const CreateTask = () => {
  const [todo, setTodo] = useState(todoData);

  

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete your task?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="createtask-container">
    <Form addTodo={addTodo} />
    <List todo={todo} handleDelete={deleteTodo} />
    <Link to="/">
      <Button>Go Back</Button>
    </Link>
    </div>
  );
};