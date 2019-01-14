
import { actionTypeContainerConstant, actionTypeContainerFormConstant, actionTypeBeerForm } from '../constants/'

const defaultBeerFromState = {
    active: false
}

const beerFormReducer = function (state = defaultBeerFromState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeBeerForm.openModalBeer:
            newState.active = true
            return newState
        case actionTypeBeerForm.closeModalBeer:
            newState.active = false
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
}

export {  containerFormReducer, beerFormReducer }