
//createStore for creating redux-store and applyMiddleware for applying middleware
import {createStore, applyMiddleware} from 'redux';
//allows to write action creators that return a function instead of an action
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

//creating redux store with rootreducer
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store