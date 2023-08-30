import React from "react";
import Task from "./Task";
import {v4 as uuidv4} from 'uuid'

function TaskList({tasks, onDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (<Task onDeleteTask={onDeleteTask} text={task.text} category={task.category} key={uuidv4()}/>))}
    </div>
  );
}

export default TaskList;
