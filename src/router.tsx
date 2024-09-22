import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import Todos from "./components/Todos.tsx";
import EditTodo from "./components/EditTodo.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '',
                element: <Todos/>
            },
            {
                path: '/edit/:id',
                element: <EditTodo/>
            }
        ]
    }
])

export default router