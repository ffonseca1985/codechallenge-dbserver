
import React from 'react'
import { connect } from 'react-redux'
import Container from './container'
import swal from 'sweetalert'
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
                    containers.map((container) => (
                        <Container key={container.name} name={container.name} temperature={container.getTemperature()} removeContainer={() => removeContainer(container)} />)
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
            if(values.name == undefined || values.name == ''){
                swal('Ops...', 'Field name not is fill', 'error')
                return
            } 

            if(values.temperature == undefined || values.temperature == ''){
                swal('Ops...', 'Field Temperature not is fill', 'error')
                return
            } 

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