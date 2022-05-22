import React from "react";

import { TodoNav } from '../models/todoNav.models';

interface ITodoNavigationProps{
    options: TodoNav,
    handleClick:Function
}


const TodoNavigation: React.FC<ITodoNavigationProps> = ({ options, handleClick }): JSX.Element => {

    return (
        <div className="mt-4">
            <div className='flex items-center justify-center w-full mx-auto'>
                <ul className="grid items-center grid-cols-4 grid-rows-1 md:text-2xl">
                    <li
                        onClick={()=>{handleClick("All")}}
                        className={`pb-2 text-center mx-2 md:font-bold cursor-pointer ${options==="All" ? "border-b-4 border-b-slate-400 text-blue-400 duration-400" : "hover:text-slate-400 duration-300 border-b-2 border-b-transparent hover:border-b-red-200"}`}>
                            All
                        </li>
                    <li
                        onClick={()=>{handleClick("Active")}}
                        className={`pb-2 text-center mx-2 md:font-bold cursor-pointer ${options==="Active"? "border-b-4 border-b-slate-400 text-blue-400 duration-400" : "hover:text-slate-400 duration-300 border-b-2 border-b-transparent hover:border-b-red-200"}`}>
                            Active
                        </li>
                    <li
                        onClick={()=>{handleClick("Completed")}}
                        className={`pb-2 text-center mx-2 md:font-bold cursor-pointer ${options==="Completed"? "border-b-4 border-b-slate-400 text-blue-400 duration-400" : "hover:text-slate-400 duration-300 border-b-2 border-b-transparent hover:border-b-red-200"}`}>
                            Completed
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default TodoNavigation;