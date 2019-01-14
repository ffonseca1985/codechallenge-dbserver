
import { actionTypeContainerConstant, actionTypeContainerFormConstant, actionTypeBeerForm} from '../constants/'

const addBeerAction = function (containerName, beerName){
    
    return {
        type: actionTypeBeerForm.addBeer,
        containerName,
        beerName
    }
}

const increaseAction = function(containerName){
    return{
        type: actionTypeContainerConstant.increaseTemperature,
        containerName
    }
}

const decreaseAction = function(containerName){
    return{
        type: actionTypeContainerConstant.decreaseTemperature,
        containerName
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

export { addBeerAction, removeBeerAction, openModalContainer, closeModalContainer, openModalBeerAction, closeModalBeerAction,  increaseAction, decreaseAction }