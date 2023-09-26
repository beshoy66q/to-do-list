import React from 'react';
import "./card.styles.css";
import TitleComponent from '../title/title.component';
import FormComponent from '../collect-data/form.component';
import TasksContainerComponent from '../tasks-container/tasks-container.component';
const CardComponent = () => {
    return (
        <div className='card'>
            <TitleComponent />
            <FormComponent />
            <TasksContainerComponent />
        </div>
    );
}

export default CardComponent;
