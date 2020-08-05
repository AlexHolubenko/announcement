import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setSearchList } from '../actions';

 const SearchBox = (props) => {

    const dispatch = useDispatch();
    const searchedTerm = useSelector(state => state.search.searchTerm);
    const annList = useSelector(state => state.main.annList);

    const handleSearch = (e) => {

        dispatch(setSearchTerm(e.target.value))
        const results = annList.filter(item => (
            item.title.toLowerCase().includes(searchedTerm.toLowerCase())
        ))
        dispatch(setSearchList(results));
    }

    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Enter title..."
                value={searchedTerm}
                onChange={(e) => handleSearch(e)}
            />
        </div>
    )
}
export default SearchBox;