import { Todo } from "src/app/models/Todo";
import * as TodosActions from './todo.action'

export interface TodosState {
    todos: Todo[];
}


export const initialState: TodosState = {
    todos: [
        { id: 1, content: 'buy iPhone', status: false },
        { id: 2, content: 'buy books', status: false }
    ]
}


export function todosReducer(
    state: TodosState = initialState,
    action: TodosActions.ActionsUnion
) {
    switch (action.type) {
        case TodosActions.ActionTypes.Add: return { ...state, todos: [...state.todos, { id: state.todos.length + 1, content: action.payload, status: false }] }
        case TodosActions.ActionTypes.Delete:
            let filteredTodos = state.todos.filter(todo => todo.id != action.payload)
            return { ...state, todos: filteredTodos }
        case TodosActions.ActionTypes.Done: 
            let newTodos = state.todos.map((todo)=> {
                if(todo.id === action.payload){
                    return {id: todo.id, content: todo.content, status: true}
                }
                return todo;
            })
            return {...state, todos: newTodos}

        default: return state;
    }

}

