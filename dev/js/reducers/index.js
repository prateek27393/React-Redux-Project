import { combineReducers } from 'redux';
import userReducer from './reducer-users';
import activeUserReducer from './active-user-reducer';
import { test } from "./active-user-reducer";


const allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUserReducer,
    test
});

export default allReducers;