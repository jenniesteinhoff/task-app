import React, {useState} from "react";
import { Button } from "./Button";

export const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [index, setIndex] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      index,
      title,
      task,
      day,
    };

    if (newTodo.title.trim() === "", newTodo.task.trim() === "", newTodo.day === "") {
    alert("Not a valid input")
    }
    else if (newTodo.index === 11) {
    alert("You have reached max amount of tasks")
    }
    else {
    addTodo(newTodo);
    console.log(newTodo);
    setIndex(index+1);
    setTitle("");
    setTask("");
    setDay("");    
    }
  };


  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add new task</h2>
      <label className="form-label">

        <div className="title-section">
        <p>Title</p>
        <input maxLength={12} value={title} type="text" placeholder="Name your task" onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="task-section">
        <p>Task</p>
        <input maxLength={20} value={task} type="text" placeholder="Describe your task" onChange={(e) => setTask(e.target.value)}/>
        </div>

        <div className="day-section">
        <p>Day</p>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value={""} disabled={true}>
            Select Day
          </option>
          <option value="Monday">monday</option>
          <option value="Tuesday">tuesday</option>
          <option value="Wednesday">wednesday</option>
          <option value="Thursday">thursday</option>
          <option value="Friday">friday</option>
          <option value="Saturday">saturday</option>
          <option value="Sunday">sunday</option>
        </select>
        </div>
      </label>
      <Button type="submit" children="Add task" buttonClass="btn todoform"/>
    </form>
  )
};