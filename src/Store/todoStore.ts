import { observable, action, makeObservable} from 'mobx'
import { Store } from './store';

interface Itodo {
    id?: string;
    name?: string;
    isCompleted?: boolean;
}

// Store
export class TodoStore {
    constructor(store: Store) {    
    }



    @observable todos: Itodo[] = []
    @action addTodo = (item: Itodo) => {
        this.todos = [item, ...this.todos];
    }

    @action editTodo = (update: Itodo) => {
        const result = this.todos.map(ele => {
            if (update.id === ele.id) {
                return { ...update }
            } else {
                return ele
            }
        })
        this.todos = result
    }

    @action deleteTodo = (id: string) => {
        const result = this.todos.filter(ele => {
            return id !== ele.id
        })
        this.todos = result
    }
}
