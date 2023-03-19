import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {updateFilterStatus} from "../../store/slices/toDoListSice";
import "./FilterButtons.css"
const FilterButtons = () => {

    const status = useSelector(state => state.todoList.filterStatus)
    // const [filterStatus,setFilterStatus] = useState(filterStatus)

    const dispatch = useDispatch();

    const handleFilter = (value) => {
        dispatch(updateFilterStatus(value))
        // console.log(status)
    }


    useEffect(() => {
        // console.log(status)
    },[status])

    return(
        <div className="filter_buttons_block">
            <button className="filter_btn" value="all" onClick={(e) => handleFilter(e.target.value)}>ALL</button>
            <button className="filter_btn" value="done" onClick={(e) => handleFilter(e.target.value)}>DONE</button>
            <button className="filter_btn" value="important" onClick={(e) => handleFilter(e.target.value)}>IMPORTANT</button>
        </div>
    )
}

export  default FilterButtons;