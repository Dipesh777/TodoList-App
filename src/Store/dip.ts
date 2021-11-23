import { observable, action } from 'mobx'
import React from 'react';
import { Base } from './Base';
import { Store } from './store';


interface Idipesh {
    id?: string;
    name?: string;
    isCompleted?: boolean;
    store?: Store;
}

// Store
export class Dip extends Base {

    constructor(store: Store) {
        super(store);
        this.store = store;
    }
    @observable dipesh: Idipesh[] = []

    @action addTodo = (item: Idipesh) => {
        // console.log('Item',item)
        this.dipesh.push(item)
    }

    @action deleteTodo = (id: string) => {
        const result = this.dipesh.filter(ele => {
            return id !== ele.id
        })
    }
}
