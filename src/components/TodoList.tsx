import React from "react";
import { Todo } from "../models/todoNav.models";

import TodoCard from "./TodoCard";

interface ITodoListProps {
    todos: Todo[],
}

const TodoList:React.FC<ITodoListProps> = ({todos}):JSX.Element => {

    return (
        <div>
            {todos.map((todo,index) => (
                <TodoCard key={index} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList;