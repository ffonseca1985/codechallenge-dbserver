
import React from 'react'
import { connect } from 'react-redux'
import Container from './container'
import { Button, Label } from 'reactstrap'
import ContainerForm from '../components/forms/ContainerForm'
import { openModalContainer, closeModalContainer } from '../components/state/actions/containerAction'
import { addContainer, removeContainer } from '../components/state/actions/trunkAction'

class Truck extends React.Component {

    render() {
        const { containers, active, openModalContainer, handleSubmitContainer, closeContainerForm, removeContainer } = this.props

        return (
            <section>
                <header>
                    <h3>Truck <hr /></h3>
                </header>
                {
                    containers.map((container, index) => (
                        <Container key={index} name={container.name} temperature={container.temperature} removeContainer={() => removeContainer(container)} />)
                    )}

                <Button color='primary' onClick={openModalContainer}>Add Container</Button>
                <ContainerForm active={active} onSubmit={handleSubmitContainer} close={closeContainerForm}></ContainerForm>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {

    return {
        containers: state.truckReducer.containers,
        active: state.containerFormReducer.active
    }

}
const mapDispatchToAction = function (dispatch, state) {
    return {
        openModalContainer: function () {
            dispatch(openModalContainer())
        },
        handleSubmitContainer: function(values) {

            dispatch(addContainer(values))
            dispatch(closeModalContainer())            
        },
        closeContainerForm: function (){
            dispatch(closeModalContainer())     
        },
        removeContainer: function(container){
            dispatch(removeContainer(container));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToAction)(Truck)