import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'
import {TodosState} from "../types/types.ts";



const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null
}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
})



const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.loading = false
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Error jon'
            })
    }
})

export default todosSlice.reducer





