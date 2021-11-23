import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Store } from '../Store/store'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import EditTodo from './EditTodo'
import Box from '@material-ui/core/Box'
import { TodoStore } from '../Store/todoStore'
import DeleteIcon from '@material-ui/icons/Delete'

interface Iprops {
    store?: Store

}

interface Istate {
    toggle: boolean
    editData: any
}

@inject('store')
@observer
class TodoList extends Component<Iprops, Istate> {

    constructor(props: any) {
        super(props)
        this.state = {
            toggle: false,
            editData: {}
        }
    }

    handleToggle = (alter: boolean) => {
        this.setState((preState) => { return { toggle: !alter } })
        console.log("toggle", this.state.toggle)
    }

    // Update Todo functionality
    handleEdit = (id: string) => {
        const result = this.props.store?.todoStore.todos.find((todo) => {
            return todo.id === id
        })
        console.log("Result", result)
        this.setState({ editData: result })
        this.handleToggle(this.state.toggle)
    }

    // Delete Todo Functionality
    handleRemove = (id: string) => {
        this.props.store!.todoStore?.deleteTodo(id);
    }



    render(): JSX.Element {
        return (
            <div>

                <List>
                    {
                        this.props.store?.todoStore.todos.map((ele, ind) => {
                            return (
                                <Box key={ind}>
                                    {this.state.toggle && this.state.editData === ele.id ? (
                                        <EditTodo data={this.state.editData} toggle={this.handleToggle} />) : (
                                        <ListItem>
                                            <Button>Done</Button>
                                            {ele.name}
                                            <Button onClick={() => this.handleEdit(ele.id!)}>Edit</Button>
                                            <DeleteIcon onClick={() => this.handleRemove(ele.id!)} />
                                        </ListItem>
                                    )
                                    }
                                    <Divider />
                                </Box >
                            )
                        })
                    }
                </List >
            </div >
        )
    }
}

export default TodoList
