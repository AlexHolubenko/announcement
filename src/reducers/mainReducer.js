import { ADD_ANN, EDIT_ANN, DELETE_ANN, SAVE_ANN, SELECT_ANN } from '../actions/types';
import { createDate } from '../helpers';
const initialState = {
    annList: [
        {id:1, title: 'Holiday camp', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. In nisl nisi scelerisque eu ultrices vitae.', creationDate:'7/3/2020'},
        {id:2, title: 'Trip to Golden sand trip', description: 'Nisl pretium fusce id velit. Arcu odio ut sem nulla pharetra. Volutpat commodo sed egestas egestas fringilla phasellus. Arcu cursus vitae congue mauris.', creationDate:'8/3/2020'},
        {id:3, title: 'Dev camp Hamburg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. In nisl nisi scelerisque eu ultrices vitae.', creationDate:'8/4/2020'}
    ],
    nextId: 4,
    selectedAnn: null,
    isEditing: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ANN:
            return { ...state, 
                    annList: [...state.annList, 
                    { id: state.nextId, ...action.payload, creationDate: createDate()}], 
                    nextId: state.nextId + 1 }
        case EDIT_ANN:
            return { ...state, isEditing: action.payload }
        case DELETE_ANN:
            return { ...state, annList: [...action.payload]}
        case SAVE_ANN:
            return { ...state, annList: [...action.payload], isEditing: false }
        case SELECT_ANN:
            return { ...state, selectedAnn: {...action.payload} }
        default:
            return state
    }
}