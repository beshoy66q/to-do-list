import { createContext } from "react";
import { useState } from "react";

const removeTask = (taskToRemove, tasks) => {
    return tasks.filter((task) => task.id !== taskToRemove.id);
  };
export const tasksContext = createContext({
    tasks: [],
    taskR: () => {},
    setTasks: () => {},
    addTask: () => {},
    removeTask: () => {},
})
export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const taskR = (taskToRemove) => {setTasks(removeTask(taskToRemove, tasks))}
    const value = {tasks,setTasks,removeTask,taskR};
    
    return <tasksContext.Provider value={value}>{children}</tasksContext.Provider>;
  };