import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'


import "./Task.css"

const Task = ({ task, hadleTaksClick, handleTaskDeletion }) => {

    const history = useHistory()

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    return (
        <div 
            className="task-container" 
            style={task.completed ? { borderLeft: '6px solid chartreuse' }: {}}
        >
        <div 
            className="task-title" 
            onClick={() => hadleTaksClick(task.id)}>
            {task.title}
        </div>
        <div className="buttons-container">
            <button 
                className="see-task-details-button" 
                onClick={() => handleTaskDetailsClick()}>
                
                    <CgInfo />
            </button>
            <button 
                className="remove-task-button" 
                onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
            </button>
        </div>
    </div>)
    //return <div className="task-container">{task.title}</div>;
}
 
export default Task;