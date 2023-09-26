import React from 'react';
import "./tasks-container.styles.css";
import TaskComponent from '../task/task.component';
import { tasksContext } from '../../contexts/tasks.context';
import { useContext } from 'react';

const TasksContainerComponent = () => {
    let {tasks} = useContext(tasksContext);
    let id = 1;
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].id = id;
        id += 1;
    }
    return (
        <div className='container'>
    
        {tasks.length !== 0 ? tasks.map((ele) => {
            return <TaskComponent props={ele} key={ele.id}/>
        
        }): ""}
        </div>
    );
}

export default TasksContainerComponent;
