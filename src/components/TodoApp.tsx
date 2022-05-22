import React from 'react'

import TodoNavigation from "./TodoNavigation";
import TodoViewer from "./TodoViewer";
import TodoInput from "./TodoInput";


import {TodoNav} from "../models/todoNav.models";

interface ITodoAppProps{

}

const TodoApp:React.FC<ITodoAppProps> = (props) => {

  //TodoNavigation
  const [options,setOptions] = React.useState<TodoNav>("All") 

  //TodoNavigationChangerFunction
  const handleClick = (nameSelected: TodoNav) => {
    setOptions(nameSelected)
  }

  return (
    <div className="text-white">
      <h1 className="p-4 text-3xl font-bold cursor-pointer md:text-5xl">#TODO</h1>
      <TodoNavigation options={options} handleClick={handleClick}/>
      {/* TodoInput */}
      <TodoInput />
      {/* <TodoViewer /> */}
      <TodoViewer options={options}/>
    </div>
  )
}

export default TodoApp