import React from 'react';
import "./form.styles.css";
import { useState } from 'react';
import { useContext } from 'react';
import { tasksContext } from '../../contexts/tasks.context';


const defaultFormFields = {
    title: "",
    num: 0,
}



const FormComponent = () => {

    const {tasks, setTasks} = useContext(tasksContext);

    let [formFields, setFormFields] = useState(defaultFormFields);
    let {title, num} = formFields;
    
    const onChangeHandler = (event) => {
          const {name, value} = event.target;
          setFormFields({...formFields, [name]: value});
    }
    
  
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setTasks([...tasks, {"title": title, "num": num}]);
        setFormFields(defaultFormFields);
     
    }
    
    return (
        <div>
            <form action="#">
                <input type="text" placeholder='title' name='title' className='input-title' onChange={onChangeHandler} value={title}/>
                <input type="number" placeholder='num' name='num' className='input-num' onChange={onChangeHandler} value={num}/>
                <button onClick={onSubmitHandler}>ADD TASK</button>
            </form>
        </div>
    );
}

export default FormComponent;
