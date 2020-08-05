import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveAnn, selectAnn } from '../actions';

const EditForm = (props) => {
    const selectedAnn = useSelector(state => state.main.selectedAnn);
    const annList = useSelector(state => state.main.annList);
    const dispatch = useDispatch();
    const [newTitle, setTitle] = useState(selectedAnn.title);
    const [newDescription, setDescription] = useState(selectedAnn.description);

    const { id } = selectedAnn;

    const onSubmit = (e) => {
        e.preventDefault();
        const editedList = annList.map(item => {
            if(item.id === id){
                const changedItem = {...item, title: newTitle, description: newDescription}
                dispatch(selectAnn( changedItem));
                return changedItem;
            } else { return item }
        })
        dispatch(saveAnn(editedList))
    }
    return (
        <div className='editing_form'>
        <form 
            onSubmit={(e) => onSubmit(e)} className='form'>
            <input 
                type='text'
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                value={newDescription}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input type='submit' value='Save' className='btn btn--save'/>
        </form>
        </div>
        
    )   
}

export default EditForm;