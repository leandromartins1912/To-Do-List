import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, hadleTaksClick, handleTaskDeletion }) => {
  return (
    <>
        {tasks.map(task => <Task key={task.id} task={task} hadleTaksClick={hadleTaksClick} handleTaskDeletion={handleTaskDeletion} />)}
    </>
  );
};

export default Tasks;
