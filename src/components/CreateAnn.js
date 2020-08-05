import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAnn } from '../actions';

const CreateAnn = (props) => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const dispatch = useDispatch();
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addAnn({title, description}));
        setTitle('');
        setDescription('');
        props.history.push('/announcements');
    }
    return (
        <form onSubmit={onSubmit} className='form'>
                <div className='field'>
                    <label>Title:</label>
                    <input 
                        type='text'
                        name='title'
                        value={title}
                        autoComplete='off'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Description:</label>
                    <textarea 
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <input 
                    className='btn btn--add' 
                    type='submit' 
                    value='Add Annnounce'
                />
            </form>
    )
} 
export default withRouter(CreateAnn);