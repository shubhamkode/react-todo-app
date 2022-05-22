import React from "react";

export type TodoNav = "All" | "Active" | "Completed";

export interface Todo{
        id: string,
        task: string,
        completed: boolean,
    }
