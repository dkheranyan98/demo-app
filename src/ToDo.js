import React, { PureComponent } from 'react';
import './ToDo.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Task from './Task';
import AddTask from './AddTask';
import EditTaskModal from './EditTaskModal';
import Confirm from './Confirm'

class ToDo extends PureComponent {
    state = {
        editTask: null,
        tasks: [],
        selectedTasks: new Set(),
        toggle: false,
        openNewTaskModal: false
    }

    componentDidMount() {
        fetch("http://localhost:3001/task", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                this.setState({
                    tasks: response.reverse()
                })
            })
            .catch((error) => {
                console.log(error)
            })
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

    addTask = (data) => {
        console.log(data)
        const body = JSON.stringify(data)
        fetch("http://localhost:3001/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                const tasks = [response, ...this.state.tasks]

                this.setState({
                    tasks: tasks,
                    openNewTaskModal: false
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }

    handleDelete = (taskId) => {
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                const newTasks = this.state.tasks.filter(task => task._id !== taskId);
                this.setState({
                    tasks: newTasks
                });
            })
            .catch((error) => {
                console.log(error)
            })

    }

    toggleConfirm = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    toggleEditModal = (task) => {
        this.setState({
            editTask: task
        })
    }

    removeSelected = () => {

        let taskIds = { tasks: [...this.state.selectedTasks] }

        fetch(`http://localhost:3001/task`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(taskIds)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                console.log(response)
                let tasks = [...this.state.tasks]

                this.state.selectedTasks.forEach((id) => {
                    tasks = tasks.filter((task) => task._id !== id)
                })

                this.setState({
                    tasks,
                    selectedTasks: new Set(),
                    toggle: false
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }

    saveTask = (editedTask) => {
        fetch(`http://localhost:3001/task/${editedTask._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editedTask)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                const tasks = [...this.state.tasks]
                const foundTaskIndex = tasks.findIndex((task) => task._id === response._id)
                tasks[foundTaskIndex] = response


                this.setState({
                    tasks,
                    editTask: null
                })
            })
            .catch((error) => {
                console.log(error)
            })


    }

    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        })
    }




    render() {
        const { tasks, toggle, selectedTasks, editTask, openNewTaskModal } = this.state
        const tasksArray = tasks.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={6} lg={4} xl={4} className="mb-3">
                    <Task
                        data={task}
                        onRemove={this.handleDelete}
                        onCheck={this.handleCheck}
                        disabled={!!selectedTasks.size}
                        onEdit={() => this.toggleEditModal(task)}
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
                                <Button
                                 variant="outline-primary"
                                 onClick={this.toggleNewTaskModal}
                                 disabled={!!selectedTasks.size}
                                >
                                 Add new task
                                </Button>
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
                        count={selectedTasks.size}
                    />
                }
                {
                    !!editTask &&
                    <EditTaskModal
                        data={editTask}
                        onSave={this.saveTask}
                        onClose={() => this.toggleEditModal(null)}
                    />
                }
                {   openNewTaskModal &&
                    <AddTask
                        onAdd={this.addTask}
                        disabled={!!selectedTasks.size}
                        onClose={this.toggleNewTaskModal}
                    />
                }


            </div>
        )
    }
}

export default ToDo