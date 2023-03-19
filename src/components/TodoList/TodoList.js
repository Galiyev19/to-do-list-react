import React from 'react'
import {useSelector} from "react-redux";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

import "./ToDoList.css"

const ToDoList = () => {

    const todoList = useSelector(state => state.todoList.todoList)
    const filterStatus = useSelector(state => state.todoList.filterStatus)
    // console.log(filterStatus)



    return(
        <ul className="list_task">
            {
                 todoList.filter((item) => {
                     if(filterStatus === 'all'){
                         return item
                     }else if(filterStatus === 'done'){
                         return  item.done === true
                     }else{
                         return  item.important === true
                     }
                 }).map(task =>
                    <ToDoListItem task={task} key={task.id}/>
                )
            }
        </ul>
    )
}

export  default ToDoList;
