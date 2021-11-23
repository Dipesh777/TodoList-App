import React from 'react'
import { Store } from './store';
export class Base {
    store: Store;
    constructor(store: Store) {
        this.store = store;
    }

}

