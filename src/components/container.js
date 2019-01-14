
import React from 'react'
import {Button } from 'reactstrap'
import { openModalBeerAction, closeModalBeerAction } from './../components/state/actions/containerAction'
import BeerForm from './../components/forms/BeerForm'

import { connect } from 'react-redux'

class Container extends React.Component {

    render() {
        const { active, close, name, temperature, addBear, removeContainer } = this.props
        
        return (
            <section> 
                <section>
                       <div> Name Container: {name} </div>
                       <div> Temperature(°C): {temperature} </div>
                </section>     
                <section>  
                    <Button color="primary" onClick={addBear}>Add Bear</Button>
                    <Button color="danger" onClick={removeContainer}>Remove Container</Button>
                </section>
                <BeerForm active={active} close={close}></BeerForm>
                <hr />
            </section>
        )
    }
}

var mapStateToProp = function(state, props){
    
    return {
        active: state.beerFormReducer.active,
        beer: {
            beers: getContainer(state.truckReducer.containers, props.name)
        }
    }
}

var mapDispatchToAction = function(dispach, state){
    return {
        addBear: function(){
            dispach(openModalBeerAction())
        },
        close: function(){
            dispach(closeModalBeerAction())
        }
        
    }
}

export default connect(mapStateToProp,  mapDispatchToAction)(Container)


function getContainer(containers,  name){
    for (let index = 0; index < containers.length; index++) {
        const element = containers[index];
        if (element.name== name)
            return element.beers
    }
}