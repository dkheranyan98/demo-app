import React, { Component } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import { formatDate } from './utils'
import './AddTask.css';

export default class AddTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            date: new Date()
        }
    }

    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    }

    addTask = () => {
        const { title, description, date } = this.state
        if (!title) {
            return
        }
        const task = {
            title,
            description,
            date: formatDate(date.toISOString())
        }

        this.props.onAdd(task)

    }

    handleDateChange = (date) => {
        this.setState({
            date
        })
    }
    


    render() {
        const { title, date } = this.state
        const { disabled, onClose } = this.props
        return (
            <Modal
                show={true}
                onHide={onClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title> Add new task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        aria-describedby="basic-addon1"
                        onChange={(event) => this.handleChange(event, 'title')}
                        onKeyDown={(event) => this.handleKeyDown(event)}
                        disabled={disabled}
                    />
                    <textarea
                        rows="5"
                        className='description'
                        onChange={(event) => this.handleChange(event, 'description')}
                    />
                    <DatePicker
                        selected={date}
                        onChange={(date) => this.handleDateChange(date)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={onClose}>
                        cancel
                    </Button>
                    <Button
                        variant="outline-secondary"
                        onClick={this.addTask}
                        disabled={!title}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

AddTask.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
}