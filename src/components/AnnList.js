import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnn } from '../actions'

const AnnList = (props) => {
    const annlistDefault = useSelector(state => state.main.annList);
    const searchList = useSelector(state => state.search.searchList);
    const searchTerm = useSelector(state => state.search.searchTerm);
    const dispatch = useDispatch();
    const annlist = props.simAnnList ? props.simAnnList : (searchTerm ? searchList : annlistDefault);
    
    if(!annlist.length) {
        return <div>anns not found</div>
    }

    const openAnn = (id) => {
        const selectedAnn = annlist.filter(item => item.id === id);
        dispatch(selectAnn(selectedAnn[0]));
        props.history.push(`/announcements/${id}`)
    }

    const previewList = annlist.map(item => {
        return (
            <div key={item.id} className='ann_card'>
                    <h3 className='ann_card-title'>{item.title}</h3>
                    <div className='meta'>
                        <span className='date'>{item.creationDate}</span>
                    </div>
                    <div className='extra content'>
                        <button 
                            className='btn btn--open' 
                            onClick={() => openAnn(item.id)}
                            > 
                            Open
                        </button>
                    </div>
            </div>
        )
    }
    )
    return (
        <div className='ann_cards'>
            {previewList}
        </div>
    )
}

const AnnListWithRouter = withRouter(AnnList)
export default AnnListWithRouter;