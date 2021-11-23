import { Dip } from './dip';
import { TodoStore } from './todoStore';

export class Store {
    todoStore = new TodoStore(this);
    dip = new Dip(this);
}
