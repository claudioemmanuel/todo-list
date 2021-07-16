import React, { useState } from "react";
import Button from "./Button";
import "./style/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }

    return (
        <>
            <h1 style={{ color: '#eee' }}>Minhas tarefas</h1>
            <div className="add-task-container">
                <input
                    onChange={handleInputChange}
                    value={inputData}
                    className="add-task-input"
                    type="text"
                />
                <div className="add-task-button-container">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
        </>
    );
};

export default AddTask;
