import { observable, action } from 'mobx'
import { threadId } from 'worker_threads';
import { Base } from './Base';
import { Store } from './store';

interface Itodo {
    id?: string;
    name?: string;
    isCompleted?: boolean;
}

// Store
export class TodoStore extends Base {
    constructor(store: Store) {
        super(store);
        this.store = store;
    }



    @observable todos: Itodo[] = []
    @action addTodo = (item: Itodo) => {
        this.todos = [item, ...this.todos];
        console.log(this.todos);
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
