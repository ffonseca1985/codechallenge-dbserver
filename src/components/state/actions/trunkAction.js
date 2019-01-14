
import { actionTypeTruckConstant } from '../constants/index'

const addContainer = function(container){
    return {
        type: actionTypeTruckConstant.addContainer,
        container   
    }
}

const openDoor = function(){
    return  {
        type: actionTypeTruckConstant.openDoor
    }
}

const openContainer = function(){
    return {
        type: actionTypeTruckConstant.openContainer
    }
}

const removeContainer = function(container){
    return {
        type: actionTypeTruckConstant.removeContainer,
        container
    }
}


export { addContainer, openDoor, openContainer, removeContainer}