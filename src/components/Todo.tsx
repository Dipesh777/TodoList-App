import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

class Todo extends Component {
    render() {
        return (
            <Box bgcolor='primary.main'>
                <Container>
                    <AddTodo />
                    <TodoList />
                </Container>
            </Box>
        )
    }
}

export default Todo
