import React, { } from 'react';

import './style/Task.css'

import { useHistory } from 'react-router-dom';
import { CgClose, CgInfo } from 'react-icons/cg';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <>
            <div
                className="task-container"
                style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>

                <div className="task-title"
                    onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>

                <div className="buttons-container">
                    <button
                        onClick={() => handleTaskDeletion(task.id)}
                        className="remove-task-button">
                        <CgClose />
                    </button>
                    <button
                        className="see-task-details-button"
                        onClick={handleTaskDetailsClick}
                    >
                        <CgInfo />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Task;