import React, {Component} from 'react'
import { Button, Modal, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { formatDate } from './utils';

import "react-datepicker/dist/react-datepicker.css";
import './EditTaskModal.css'

export default class EditTaskModal extends Component {

    constructor(props) {
        super(props)
        const {date} = props.data

        this.state = {
            ...props.data,
            date: date ? new Date(date) : new Date()
        }

    } 

    handleChange = (event) => {
        const { name, value } = event.target
              
        this.setState({
            [name]: value
        })
    }

    handleSave = () => {
        const {title, date} = this.state;

        if(!title) {
            return;
        }

        this.props.onSave({...this.state, date: formatDate(date.toISOString())})
    }

    handleDateChange = (date) => {
        this.setState({
            date
        })
    }

   render() {
    const {title, description, date} = this.state
    const {props} = this;
    const myState = {...this.state}
    return (
        <Modal
                show={true}
                onHide={props.onClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title> Add new task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        name='title'
                        value={title}
                        aria-describedby="basic-addon1"
                        placeholder='Title'
                        onChange={this.handleChange}
                        //disabled={disabled}
                    />
                    <textarea
                        name='description'
                        value={description}
                        rows="5"
                        placeholder='Description'
                        className='description'
                        onChange={this.handleChange}
                    />
                    <DatePicker
                        selected={date}
                        onChange={this.handleDateChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={props.onClose}
                        >
                        cancel
                    </Button>
                    <Button
                        variant="outline-secondary"
                        onClick={this.handleSave}
                        disabled={!title}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
    );
   }
   
}


EditTaskModal.propTypes = {
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};