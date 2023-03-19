import React from 'react'

import FormAddTask from "../components/FormAddTask/FormAddTask";
import ToDoList from "../components/TodoList/TodoList";
import FilterButtons from "../components/FilterButtons/FilterButtons";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="offset">
          <h1 className="head_main_text">ToDoList</h1>
          <FormAddTask/>
          <div className="task_list_block">
              <FilterButtons/>
             <h2 className="head_main_text_h2">TASKS</h2>
            <ToDoList/>
          </div>
      </div>
    </div>
  );
}

export default App;
