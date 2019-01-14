
import {actionTypeContainerConstant, actionTypeContainerFormConstant} from '../constants/'

const defaultContainerState = {
    beers: []
}

const containerReducer = function(state = defaultContainerState, action){

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeContainerConstant.add:
            return newState 
        default:
            return newState
    }
}

const defaultContainerFormState = {
    active: false
}

const containerFormReducer = function (state = defaultContainerFormState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeContainerFormConstant.openModalContainer:
            newState.active = true
            return newState
        case actionTypeContainerFormConstant.closeModalContainer:
            newState.active = false
            return newState    
        default:
            return newState
    }
    return state
}

export {containerReducer, containerFormReducer}