import React, { } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../Header/Button'
import './style/Task.css'

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h2>
                    {params.taskTitle}
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur non unde velit numquam eum ad veritatis nobis provident officia quibusdam fuga, veniam rem enim aspernatur magnam deleniti excepturi quasi mollitia?
                </p>
            </div>
        </>
    );
}

export default TaskDetails;