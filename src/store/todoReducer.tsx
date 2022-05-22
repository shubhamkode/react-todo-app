import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  uuid4  from "uuid4";
import TodoList from "../components/TodoList";

import { Todo } from "../models/todoNav.models";


export interface todoState{
    todoList: Todo[],
    activeList: Todo[]
    completedList: Todo[],
}

export const initialState: todoState = {
    todoList: [
    ],
    completedList:[],
    activeList: []

}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        sortTodoLists(state, payload) {
            state.todoList.forEach(todo => {
                if (todo.completed) {
                    state.completedList.push(todo)
                }
                else if (!todo.completed) {
                    state.activeList.push(todo)
                }
            });

        },
        addTodo(state, {payload}) {
            state.todoList.push(payload);
            state.activeList.push(payload);
        },

        updateTodo(state, { payload }) {
            state.todoList.map(todos => {
                if (todos.id === payload) {
                    todos.completed = !todos.completed
                }
            })
        },
        resetList(state) {
            state.activeList=[]
            state.completedList=[]
         }
    }
})

export const todoActions = TodoSlice.actions;

export const todoReducer = TodoSlice.reducer;