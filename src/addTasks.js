import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
    state ={
        inputValue: '',
    }


    
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    }

    addTask = () => {
        const { inputValue } = this.state
        if(!inputValue) {
            return
        }

        this.props.onAdd(inputValue)

        this.setState({
            inputValue: ''
        });
    }


    

    render() {
        const {inputValue} = this.state
        const {disabled} = this.props
        return (
            <InputGroup className="mb-3"  >
                <FormControl
                    aria-describedby="basic-addon1"
                    onChange={(event) => this.handleChange(event)}
                    value={inputValue}
                    onKeyDown={(event) => this.handleKeyDown(event)}
                    disabled={disabled}
                />
                <InputGroup.Append >
                    <Button
                        variant="outline-secondary"
                        onClick={this.addTask}
                        disabled={!inputValue}
                    >
                        Add
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

AddTask.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onAdd: PropTypes.func.isRequired,
}