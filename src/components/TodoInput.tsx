import React from "react";
import uuid4 from "uuid4";

import { useDispatch } from "react-redux";

import { todoActions } from "../store/todoReducer";


interface ITodoInputProps{

}

const TodoInput: React.FC<ITodoInputProps> = ():JSX.Element => {
    const dispatch = useDispatch();

    const [inputState, setInputState] = React.useState("");

    const handleInput = () => {
        if (inputState !== "") {
            dispatch(todoActions.addTodo({id:uuid4(),task:inputState,completed:false}))
            setInputState("")
        }
    }

    return (
        <div className="mt-3 ">
            <div className="w-[90%] gap-5 mx-auto">
                <input
                    value={inputState}
                    onChange={(e)=>(setInputState(e.target.value))}
                    placeholder="Enter Task..."
                    className="w-[70%] mx-4 py-2 rounded border-2 placeholder:text-center text-center text-black text-2xl" />
                <button
                    onClick={handleInput}
                    className="w-[20%] py-4 rounded bg-blue-600 hover:bg-blue-300 duration-300 font-bold ">
                    Add</button>
            </div>
        </div>
    )
}

export default TodoInput;