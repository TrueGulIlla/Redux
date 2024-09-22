import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store.ts";
import {useEffect} from "react";
import {fetchTodos} from "../redux/todosSlice.ts";
import {NavLink} from "react-router-dom";

const Todos = () => {
    const {todos, loading, error} = useSelector((state: RootState) => state.todos)
    const dispatch:AppDispatch = useDispatch()


    useEffect(() => {
       dispatch(fetchTodos())
    },[dispatch])

    return (
        <div>
            {loading && <p>Loading..</p>}
            {error && <p>{error}</p>}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}
                        <NavLink to={`/edit/${todo.id}`}>
                            <button>Edit</button>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;