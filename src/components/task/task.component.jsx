import React, { useContext } from 'react';
import "./task.styles.css";
import { useState } from 'react';
import { tasksContext } from '../../contexts/tasks.context';
const TaskComponent = ({props}) => {
    
    const {title, num} = props;
    const {taskR} = useContext(tasksContext)



    return (
        <div className='task'>
            <div className='flex'><div className='num'>{num}</div>
            <div className='task-title'>{title}</div></div>
            <div className='remove' onClick={() => {taskR(props)}}>&#10005;</div>
        </div>
    );
}

export default TaskComponent;
