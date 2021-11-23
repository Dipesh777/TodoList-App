import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Store } from '../Store/store'
import Button from '@mui/material/Button'
import TextField from '@material-ui/core/TextField'

interface Iprops {
    store?: Store,
    data?: any,
    toggle: any
}

interface Istate {
    edit?: string
}

@inject('store')
@observer


export class EditTodo extends Component<Iprops, Istate> {

    constructor(props: any) {
        super(props)
        this.state = {
            edit: this.props.data.name
        }
    }

    // Handling Cancel btn of edit form
    handleCancel = () => {
        this.props.toggle(true)
    }

    // Handling edit form data change
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ edit: event.target.value })
    }

    // Handling Store Update
    handleUpdate = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const formData = {
            id: this.props.data.id,
            name: this.state.edit,
            isCompleted: false
        }
        this.props.store?.todoStore.editTodo(formData)
        this.handleCancel()
    }

    render() {
        return (
            <div>
                <form>
                    <TextField type='text' variant='standard' value={this.state.edit} onChange={this.handleChange} />
                </form>
                <Button onClick={this.handleUpdate}>Update</Button>
                <Button onClick={this.handleCancel}>Cancel</Button>
            </div>
        )
    }
}

export default EditTodo
