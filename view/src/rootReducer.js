import { combineReducers } from 'redux';
import pinAuth from './reducers/pinAuth';
import auth from './reducers/auth';

export default combineReducers({
    auth,
    pinAuth
})