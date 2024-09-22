import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {EditTodo, Todo} from "../types/types.ts";

export const editTodo = createAsyncThunk('todos/editTodo', async (todo:Todo) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
    return response.data
} )

const initialState: EditTodo = {
    loading: false,
    error: null,
    editableTodo: null,
}


const editSlice = createSlice({
    name: "editTodo",
    initialState,
    reducers: {
        setEditableTodo: (state, action) => {
            state.editableTodo = action.payload
        },
        clearEditableTodo:(state) => {
            state.editableTodo = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(editTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editTodo.fulfilled, (state, action) => {
                state.loading = false
                state.editableTodo = action.payload
            })
            .addCase(editTodo.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Error editing todos'
            })
    }
})

export const {setEditableTodo, clearEditableTodo} = editSlice.actions
export default editSlice.reducer
