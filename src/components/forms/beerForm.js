
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { BeerMock } from '../../models/beer'

import {
    Button, Modal, ModalBody, ModalHeader
} from 'reactstrap'

class ContainerForm extends React.Component {

    render() {
        const { handleSubmit, close, active } = this.props
        return (

            <Modal isOpen={active}>
                <ModalHeader>
                        Put the beer in the container:
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                    
                        <div className="form-group">
                            <label>Choose a beer</label>
                            <Field className="form-control" name="beer" component="select" type="text">
                                {
                                    BeerMock().map((b) => (
                                        <option key={b.name} value={b.name}>{b.name}</option>
                                    ))
                                }               
                            </Field>
                        </div>
                        <div className="form-group">
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" onClick={close}>Cancel</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        )
    }
}

export default reduxForm({
    form: 'ContainerForm'
})(ContainerForm)

