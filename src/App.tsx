import React, { Component } from 'react'
import Todo from './components/Todo'
import { observer, inject } from 'mobx-react';


interface Iprops {
}

@inject('store')
@observer
class App extends Component<Iprops, {}>{

  render() {

    return (
      <div>
        <h1>Todo List</h1>
        <Todo />
      </div>
    )
  }
}

export default App
