import React from "react";
import { Todo } from "../models/todoNav.models";

import { useDispatch } from 'react-redux';
import { todoActions } from "../store/todoReducer";

interface ITodoCardProps{
    todo: Todo,
}


const TodoCard: React.FC<ITodoCardProps> = ({todo}): JSX.Element => {

    const dispatch = useDispatch();

    const handleChange = (task:string) => {
        dispatch(todoActions.updateTodo(task))
        dispatch(todoActions.resetList());
        dispatch(todoActions.sortTodoLists(''))
    }

    return (
        <div className="flex items-center justify-center p-5 m-4 text-center border-2 border-black rounded drop-shadow-lg md:text-2xl">
            <div >
                <input type="checkbox"
                    className=" apperance-none checked:bg-blue-500"  
                    checked={todo.completed}
                    onChange={()=>handleChange(todo.id)}
                />
            </div>
            <div className="mx-8 font-bold">
                {todo.task}
            </div>
        </div>
    )
} 

export default TodoCard;