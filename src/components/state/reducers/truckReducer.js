
import { actionTypeTruckConstant } from '../constants/'
import {Container} from '../../../models/container'

const initialState = {
    containers: []
}

const truckReducer = function(state = initialState, action){

    let newState = Object.assign({}, state)
    
    switch (action.type) {
        case actionTypeTruckConstant.addContainer:

            if (exist(state.containers, action.container.name))
            {
                alert('this container alredy exist')
                return newState
            }
            newState.containers.push(new Container(action.container.name, action.container.temperature))        
            return newState;
        case actionTypeTruckConstant.removeContainer:

            var container = state.containers
            var newContainer = removeByName(container, action.container.name)
            newState.containers = newContainer
            return newState
        default:
            return state
    }
} 

export default truckReducer

function exist(containers, name) {

    var result = false;
    for (let index = 0; index < containers.length; index++) {
        const element = containers[index];

        if (element.name == name) {
            result = true
            break
        }

    }

    return result
}

function removeByName(container, name){

    for (let index = 0; index < container.length; index++) {
        const element = container[index];
        if (element.name == name)
            container.splice(index, 1)
    } 

    return container
}