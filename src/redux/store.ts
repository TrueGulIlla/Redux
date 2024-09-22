import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./todosSlice.ts";
import counterSlice from "./counterSlice.ts";
import editSlice from "./editSlice.ts";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todosSlice,
        edit: editSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store