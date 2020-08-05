import React from 'react';
import { withRouter } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import AnnList from './AnnList';
import { showSimAnn, showTopThreeSimAnn } from '../helpers';
import { editAnn, delAnn } from '../actions';

const SelAnn = (props) => {
    const selectedAnn = useSelector(state => state.main.selectedAnn)
    const annlist = useSelector(state => state.main.annList.reverse())
    const dispatch = useDispatch()

    if(!selectedAnn){
        return null
    }
    const { id, title, description, creationDate } = selectedAnn;
    const simAnnList = annlist.filter(ann => showSimAnn(selectedAnn, ann));
    const threeItemsList = showTopThreeSimAnn(simAnnList);
    
    const del = (Id) => {
        const list = annlist.filter(item => item.id !== Id)
        dispatch(delAnn(list));
        props.history.push('/announcements')
    }
    return (
        <div>
            <div className='selected_ann' >
                    <h2 className='selected_ann-title'>{title}</h2>
                <p className='description'>{description}</p>
                <div className='meta'>
                    <span className='date'>{creationDate}</span>
                </div>
                <button className='btn btn--edit' onClick={() => dispatch(editAnn())}>Edit</button>
                <button className='btn btn--del' onClick={() => del(id)}>Delete</button>
                <div className='similar-ann'>
                    <h3>Similar Announcment: </h3>
                    <AnnList simAnnList={threeItemsList} />
                </div>
            </div>
            
        </div>
    )
}

const SelAnnWithRouter = withRouter(SelAnn);

export default SelAnnWithRouter;