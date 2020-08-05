import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    main: mainReducer,
    search: searchReducer
})