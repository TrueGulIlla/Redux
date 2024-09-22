export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed:boolean;
}

export interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}

export interface EditTodo {
    loading:boolean;
    error: string | null;
    editableTodo: Todo | null
}