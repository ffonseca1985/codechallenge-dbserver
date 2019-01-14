
import React from 'react'
import {Button } from 'reactstrap'

import { connect } from 'react-redux'

class Container extends React.Component {

    render() {
        const {name, temperature, addBear, removeContainer } = this.props
        
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
                <hr />
            </section>
        )
    }
}

var mapStateToProp = function(state, props){

}

var mapDispatchToAction = function(dispach, state){
    return {
        addBear: function(){
        }
    }
}

export default connect(null,  mapDispatchToAction)(Container)