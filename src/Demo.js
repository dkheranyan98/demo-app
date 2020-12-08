import React, { Component } from 'react';
import './Demo.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import idGenerator from './idGenerator';
import Task from './Task';
import AddTask from './addTasks';
import Confirm from './RemoveModal'

class ToDo extends Component {
    state = {
        tasks: [],
        selectedTasks: new Set(),
        toggle: false
    }

    handleCheck = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks)

        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId)
        } else {
            selectedTasks.add(taskId)
        }
        this.setState({
            selectedTasks
        })
    }

    addTask = (value) => {

        const newTask = {
            text: value,
            _id: idGenerator()
        }

        const tasksArray = [newTask, ...this.state.tasks]

        this.setState({
            tasks: tasksArray,
        })
    }

    handleDelete = (taskId) => {
        const newTasks = this.state.tasks.filter(task => task._id !== taskId);
        this.setState({
            tasks: newTasks
        });
    }

    toggleConfirm = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    removeSelected = () => {
        let tasks = [...this.state.tasks]

        this.state.selectedTasks.forEach((id) => {
            tasks = tasks.filter((task) => task._id !== id)
        })

        this.setState({
            tasks,
            selectedTasks: new Set(),
            toggle: false
        })

    }

 

    render() {
        const { tasks, toggle, selectedTasks } = this.state
        const tasksArray = tasks.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
                    <Task
                        data={task}
                        onRemove={this.handleDelete}
                        onCheck={this.handleCheck}
                        disabled={!!selectedTasks.size}
                    />
                </Col>
            )
        })

        return (
            <div>
                <Container >
                    <Container>
                        <Row className='justify-content-center'>
                            <Col md={8} xl={2} lg={3} sm={6}>
                                <AddTask
                                    onAdd={this.addTask}
                                    disabled={!!selectedTasks.size}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        {tasksArray}
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Button
                                variant="outline-danger"
                                onClick={this.toggleConfirm}
                                disabled={selectedTasks.size === 0 ? true : false}
                            >
                                Remove selected
                       </Button>
                        </Col>
                    </Row>
                </Container>
                {toggle &&
                    <Confirm
                        onSubmit={this.removeSelected}
                        onClose={this.toggleConfirm}
                        count = {selectedTasks.size}
                    />
                }

            </div>
        )
    }
}

export default ToDo