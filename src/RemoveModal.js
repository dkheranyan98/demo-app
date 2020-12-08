import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Confirm(props) {

    return (
          <Modal centered show={true} onHide={props.onClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to delete this {props.count} tasks</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
            <Button variant="danger" onClick={props.onSubmit}>
                Submit
              </Button>
              <Button variant="secondary" onClick={props.onClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
      );
}


Confirm.propTypes = {
    count: PropTypes.number,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
};