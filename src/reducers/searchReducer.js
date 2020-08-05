import { SEARCHED_TERM, SEARCHED_LIST } from '../actions/types';

const initialState = {
    searchTerm: '',
    searchList: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SEARCHED_TERM:
            return { ...state, searchTerm: action.payload}
        case SEARCHED_LIST:
            return { ...state, searchList: [...action.payload]}
        default:
            return state
    }
}