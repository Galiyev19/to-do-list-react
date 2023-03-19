import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    filterStatus: "all"
}


const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTask: (state,action) => {
            const obj = {
                id: state.todoList.length + 1,
                name: action.payload,
                done: false,
                important: false
            }

            state.todoList.push(obj)
        },
        deleteTask: (state,action) => {
            const idx = state.todoList.findIndex(task => task.id === action.payload.id)

            state.todoList = [... state.todoList.slice(0, idx), ... state.todoList.slice(idx + 1)]
        },
        importantTask: (state, action) => {
            const idx = state.todoList.findIndex(task => task.id === action.payload.id)

            state.todoList[idx].important = action.payload.important

        },
        checkedTask: (state, action) => {
            const idx = state.todoList.findIndex(task => task.id === action.payload.id)

            state.todoList[idx].done = action.payload.done
        },
        updateFilterStatus: (state, action) => {
            state.filterStatus = action.payload
        }
    }
})

export const { addTask, deleteTask , importantTask, checkedTask, updateFilterStatus } = todoListSlice.actions

export  default todoListSlice.reducer