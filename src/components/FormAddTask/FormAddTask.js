import React,{ useState } from 'react'
import {useDispatch} from "react-redux";
import {AiOutlinePlus} from 'react-icons/ai'
import { addTask } from "../../store/slices/toDoListSice";

import "./FormAddTask.css"

const FormAddTask = () => {

    const [task, setTask ] = useState('')
    const dispatch = useDispatch()

    const handleAddTask = () => {
        dispatch(addTask(task))
        setTask('')
    }

    return(
        <div>
            <h2 className="head_main_text_h2">Add name task</h2>
            <div className="input_block">
                <input className="input_task" placeholder="type name task" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button className="btn_add_task" onClick={() => handleAddTask()}><AiOutlinePlus/></button>
            </div>
        </div>
    )
}

export default FormAddTask;