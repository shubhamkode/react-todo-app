import React from "react";

import TodoList from "./TodoList";

import { useSelector} from "react-redux";

import { RootState } from "../store/index";
import { TodoNav } from "../models/todoNav.models";

interface ITodoViewerProps{
    options: TodoNav,

}
const TodoViewer: React.FC<ITodoViewerProps> = ({options}):JSX.Element => {

    const { todoList,completedList,activeList } = useSelector((state:RootState ) => state.todo);

    // console.log(todoList)
    // console.log(completedList)
    // console.log(activeList)

    const getList = (current:string) => {
        switch (current) {
            case "All":
                return todoList;
            case "Active":
                return activeList;
            case "Completed":
                return completedList;
            default:
                return [];
        }
    }


    return (
        <div className="  drop-shadow-lg h-[70vh] rounded-xl m-[2rem] md:container md:mx-auto bg-white">
            <div className="text-black border-2 border-transparent border-t-[30px] border-t-gray-700  h-[65vh] w-[95%] m-auto overflow-scroll">
                <TodoList todos={getList(options)}/>
            </div>
        </div>
    )
}

export default TodoViewer;