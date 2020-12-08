import React, { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  Button, Card } from 'react-bootstrap';
import './task.css';
import PropTypes from 'prop-types';

export default class Task extends Component {

    state = {
        checked: false
    }


    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
        const {onCheck, data} = this.props
        onCheck(data._id)


    }

    render() {
      
        const task = this.props.data
        const {checked} = this.state
        const {disabled} = this.props
        return (
            <Card className={checked ? 'task' : ''}>
                <Card.Body>
                    <input
                    type='checkbox'
                    onClick={this.handleCheck}
                    />
                    <Card.Title>{task.text.slice(0, 10) + '...'}</Card.Title>
                    <Card.Text>
                        {task.text}
                    </Card.Text>
                    <Button 
                    variant="danger" 
                    onClick={() => this.props.onRemove(task._id)}
                    disabled={disabled}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

Task.propTypes = {
    data: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};