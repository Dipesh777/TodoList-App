import { observable, action, makeObservable } from 'mobx'
import { act } from 'react-dom/test-utils';
import { Store } from './store';

interface Itodo {
    id?: string;
    name?: string;
    isCompleted?: boolean;
}

// Store
export class TodoStore {

    todos: Itodo[] = [];

    constructor(store: Store) {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            editTodo: action,
            deleteTodo: action,
            isComplete: action
        });
    }



    addTodo = (item: Itodo) => {
        this.todos = [item, ...this.todos];
    }

    isComplete = (id: string) => {
        const result = this.todos.map(ele => {
            if (ele.id === id) {
                return { ...ele, isCompleted: !ele.isCompleted }
            } else {
                return ele
            }
        })
        this.todos = result
    }

    editTodo = (update: Itodo) => {
        const result = this.todos.map(ele => {
            if (update.id === ele.id) {
                return { ...update }
            } else {
                return ele
            }
        })
        this.todos = result
    }

    deleteTodo = (id: string) => {
        const result = this.todos.filter(ele => {
            return id !== ele.id
        })
        this.todos = result
    }
}
