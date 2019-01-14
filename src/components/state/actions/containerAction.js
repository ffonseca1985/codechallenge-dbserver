
import { actionTypeContainerConstant, actionTypeContainerFormConstant} from '../constants/'

const addBeerAction = function (beer){
    
    return {
        type: actionTypeContainerConstant.addBeer,
        beer
    }
}

const removeBeerAction = function (beer){
    
    return {
        type: actionTypeContainerConstant.removeBeer,
        beer
    }
}

const openModalContainer = function () {
    return {
        type: actionTypeContainerFormConstant.openModalContainer
    }
}

const closeModalContainer = function () {
    return {
        type: actionTypeContainerFormConstant.closeModalContainer
    }
}

export { addBeerAction, removeBeerAction, openModalContainer, closeModalContainer }