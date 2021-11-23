import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { Store } from '../Store/store';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { TodoStore } from '../Store/todoStore';

interface Iprops {
    store?: Store
}

interface Istate {
    todo?: string
}

@inject('store')
@observer
class AddTodo extends Component<Iprops, Istate> {

    constructor(props: any) {
        super(props)

        this.state = {
            todo: ""
        }
    }


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ todo: event.target.value })
        // console.log(this.state.todo)
    }

    @action handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const formData = {
            id: uuidv4(),
            name: this.state.todo,
            isCompleted: false
        }
        
        this.props.store!.todoStore.addTodo(formData);
        this.setState((preState) => {
            return {
                todo: ""
            }
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Todos" variant='standard' type="text" value={this.state.todo} onChange={this.handleChange} placeholder='Enter your task' /><br /><br />
                    <Button type='submit' variant='contained'>Add</Button>
                </form>
            </div>
        )
    }
}

export default AddTodo
