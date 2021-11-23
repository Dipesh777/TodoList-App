import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import { Store } from './Store/store';

export const rootStore = new Store();

ReactDOM.render(
    <Provider store={rootStore} >
        <App />
    </Provider >,
    document.getElementById('root')
)
