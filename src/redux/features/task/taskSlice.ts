import { RootState } from "@/redux/store";
import { Itodos } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    todos: Itodos[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: IinitialState = {
    todos: [
        {
            id: "dfgdsgtfg",
            title: "first task",
            description: "this is the first task",
            dueDate: "2025-10-10",
            isCompleted: false,
            priority: "High",
        },
        {
            id: "dfgyjuhfg",
            title: "second task",
            description: "this is the second task",
            dueDate: "2025-10-10",
            isCompleted: false,
            priority: "Low",
        },
    ],
    filter: "all",
}

const taskSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
})

export const selectTodos = (state: RootState) => {
    return state.tasks.todos;
}

export const selectFilter = (state: RootState) => {
    return state.tasks.filter;
}

export default taskSlice.reducer