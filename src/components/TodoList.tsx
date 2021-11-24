import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Store } from '../Store/store'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import EditTodo from './EditTodo'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Close, Check } from '@material-ui/icons'

interface Iprops {
    store?: Store
}

interface Istate {
    toggle: boolean
    editData: any
}

@inject('store')
@observer class TodoList extends Component<Iprops, Istate> {

    constructor(props: any) {
        super(props)
        this.state = {
            toggle: false,
            editData: {}
        }
    }

    handleToggle = (alter: boolean) => {
        this.setState((preState) => { return { toggle: !alter } })
    }

    handleComplete = (id: string) => {
        this.props.store!.todoStore?.isComplete(id)
    }

    // Update Todo functionality
    handleEdit = (id: string) => {
        const result = this.props.store?.todoStore.todos.find((todo) => {
            return todo.id === id
        })
        console.log("result", result)
        this.setState({ editData: result })
        this.handleToggle(this.state.toggle)
    }

    // Delete Todo Functionality
    handleRemove = (id: string) => {
        this.props.store!.todoStore?.deleteTodo(id);
    }



    render(): JSX.Element {
        return (
            <List>
                {
                    this.props.store?.todoStore.todos.map((ele, ind) => {
                        return (
                            <div key={ind}>
                                {this.state.toggle && this.state.editData.id === ele.id ? (
                                    <EditTodo data={this.state.editData} toggle={this.handleToggle} />
                                ) : (
                                    <ListItem
                                        style={{ textDecoration: ele.isCompleted ? 'line-through' : 'none' }}
                                    >
                                        {ele.isCompleted ? <Check onClick={() => this.handleComplete(ele.id!)} /> : <Close onClick={() => this.handleComplete(ele.id!)} />}
                                        {ele.name}
                                        <EditIcon onClick={() => this.handleEdit(ele.id!)} />
                                        <DeleteIcon onClick={() => this.handleRemove(ele.id!)} />
                                    </ListItem>
                                )}
                                <Divider />
                            </div>
                        )
                    })
                }
            </List >
        )
    }
}

export default TodoList
