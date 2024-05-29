import React, {useState} from "react";
import { Card } from "./Card";
import { Checkbox } from "./Checkbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faCircleXmark, faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Item = ({ todo, handleDelete }) => {
  const [complete, setComplete] = useState(todo.complete);

  const handleChange = (e) => {
    //set icon to complete/green (truthy)
    setComplete(e.target.checked);
  };

   return (
    <Card>
      <div className="card-container">
        <div className="flex-container">
          <div className="title">{todo.title}</div>
          <div className="icons">

            <Checkbox 
            //query about color/icon change based on truthy/falsy
            icon={complete === true ? faCircleCheck : faCircleXmark} 
            label={complete === true ? "icon complete" : "icon incomplete"} 
            value={complete} 
            onChange={handleChange} />
            {/*delete this task with this id when clicked*/}
            <FontAwesomeIcon onClick={() => handleDelete(todo.id)}
            className="icon trash" 
            icon={faTrashCan} 
            size="lg" />
          </div>
        </div>
      </div>

      <div className="task">{todo.task}</div>

        <div className="day">
          <p>{todo.day}</p>
          <FontAwesomeIcon 
          className="icon calender" 
          icon={faCalendarDays} 
          size="lg" />
        </div>
    </Card>
   );
};