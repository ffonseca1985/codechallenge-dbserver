
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {
    Button, Modal, ModalBody, ModalHeader
} from 'reactstrap'

class ContainerForm extends React.Component {

    render() {
        const { handleSubmit, close, active } = this.props
        return (

            <Modal isOpen={active}>
                <ModalHeader>
                    New Container:
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                    
                        <div className="form-group">
                            <label>Name of Container</label>
                            <Field className="form-control" name="name" component="input" type="text"></Field>
                        </div>
                        <div className="form-group">
                            <label>Temperature (°C)</label>
                            <Field className="form-control" name="temperature" component="input" type="number"></Field>
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

