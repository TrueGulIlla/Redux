import {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AppDispatch, RootState} from "../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {clearEditableTodo, editTodo, setEditableTodo} from "../redux/editSlice.ts";

const EditTodo:FC = () => {
    const {id} = useParams<{id: string}>()
    const dispatch:AppDispatch = useDispatch()
    const navigate = useNavigate()
    const {todos} = useSelector((state:RootState) => state.todos)
    const {editableTodo} = useSelector((state:RootState) => state.edit)

    const [newTitle, setNewTitle] = useState('')


    useEffect(() => {
        const todoToEdit = todos.find((todo) => todo.id === Number(id))
        if(todoToEdit) {
            dispatch(setEditableTodo(todoToEdit))
            setNewTitle(todoToEdit.title)
        }
    }, [dispatch, id, todos])

    const handleSave = () => {
        if (editableTodo) {
            dispatch(editTodo({...editableTodo, title: newTitle}))
            dispatch(clearEditableTodo())
            navigate('/')
        }
    }
    return (
        <div>
            <h2>Edit Form</h2>
            {editableTodo ? (
                <div>
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <button onClick={handleSave}>save</button>
                    <button onClick={() => navigate("/")}>exit</button>
                </div>
            ): (
                <p>Todo not found</p>
            )}
        </div>
    );
};

export default EditTodo;