
import { actionTypeContainerConstant, actionTypeContainerFormConstant, actionTypeBeerForm} from '../constants/'

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

const openModalBeerAction = function(){
    return {
        type: actionTypeBeerForm.openModalBeer
    }
}

const closeModalBeerAction = function(){
    return {
        type: actionTypeBeerForm.closeModalBeer
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

export { addBeerAction, removeBeerAction, openModalContainer, closeModalContainer, openModalBeerAction, closeModalBeerAction }