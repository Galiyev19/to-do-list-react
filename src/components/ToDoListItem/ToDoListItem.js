import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {AiTwotoneStar} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'

import {importantTask, deleteTask, checkedTask} from "../../store/slices/toDoListSice";

import './ToDoListItem.css'

const ToDoListItem = ({ task }) => {

    const [checked,setChecked] = useState(task.done)
    const [important, setImportant] = useState(task.important)

    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todoList.todoList)

    const handleChecked = () => {
        setChecked(!checked)
        dispatch(checkedTask({id: task.id, done: !checked}))

    }



    const handleImportant = () => {
        setImportant(!important)
        dispatch(importantTask({id: task.id,important: !important}))
        // console.log(todoList)
    }

    const handleDeleted = () => {
        dispatch(deleteTask({id: task.id}))
    }

    useEffect(() => {
        console.log(todoList)
    },[checked])

    return(
        <li className="list_task_item" >
            <div className="list_task_check_block">
                <input type="checkbox" id={task.id} checked={checked} onChange={handleChecked} className="checkbox"/>
                <label htmlFor={task.id} className={ !checked ? "task_text" : 'done_text' }>{task.name}</label>
            </div>
            <div className="list_task_delete_fav_block">
                <AiTwotoneStar onClick={handleImportant} className={!important ? "fav_icon" : 'color_fav'}/>
                <div className="line"></div>
                <BsTrash className="icon del_icon" onClick={handleDeleted}/>
            </div>
        </li>
    )
}

export  default  ToDoListItem;