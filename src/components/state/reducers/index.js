
import { combineReducers } from 'redux'
import { containerReducer, containerFormReducer, beerFormReducer } from '../reducers/containerReducer'
import truckReducer from '../reducers/truckReducer'
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers(
    {
        truckReducer,
        form: formReducer,
        containerFormReducer,
        beerFormReducer
    })

export default reducers