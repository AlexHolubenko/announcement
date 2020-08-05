import { 
    ADD_ANN, 
    EDIT_ANN, 
    DELETE_ANN, 
    SAVE_ANN, 
    SELECT_ANN, 
    SEARCHED_TERM,
    SEARCHED_LIST
} from '../actions/types';

export const addAnn = (newAnn) => {
    return {
        type: ADD_ANN,
        payload: newAnn
    }
}
export const selectAnn = (selAnn) => {
    return {
        type: SELECT_ANN,
        payload: selAnn
    }
}
export const editAnn = () => {
    return {
        type: EDIT_ANN,
        payload: true
    }
}
export const delAnn = (newlist) => {
    return {
        type: DELETE_ANN,
        payload: newlist
    }
}

export const saveAnn = (newAnn) => {
    return {
        type: SAVE_ANN,
        payload: newAnn
    }
}

export const setSearchTerm = (term) => {
    return {
        type: SEARCHED_TERM,
        payload: term
    }
}
export const setSearchList = (list) => {
    return {
        type: SEARCHED_LIST,
        payload: list
    }
}