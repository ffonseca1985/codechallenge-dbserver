
import { combineReducers } from 'redux'
import { containerReducer, containerFormReducer } from '../reducers/containerReducer'
import truckReducer from '../reducers/truckReducer'
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers(
    {
        containerReducer,
        truckReducer,
        form: formReducer,
        containerFormReducer
    })

export default reducers