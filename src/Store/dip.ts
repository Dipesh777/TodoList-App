import { observable, action } from 'mobx'
import React from 'react';

import { Store } from './store';


interface Idipesh {
    id?: string;
    name?: string;
    isCompleted?: boolean;
    store?: Store;
}

// Store
export class Dip {

    constructor(store: Store) {

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
