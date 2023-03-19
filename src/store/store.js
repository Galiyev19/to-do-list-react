import {configureStore} from "@reduxjs/toolkit";


import todoListSlice from './slices/toDoListSice'

const store = configureStore({
    reducer: {
        todoList: todoListSlice
    }
})

export default store;