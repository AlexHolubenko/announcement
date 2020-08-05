import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import CreateAnn from './CreateAnn';
import AnnList from './AnnList';
import SelectedAnn from './SelectedAnn';
import EditingForm from './EditingForm';
import SearchBox from './SearchBox';
import '../styles/main.scss';

const App = (props) => {
    const isEditing = useSelector( state => state.main.isEditing)
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/new' exact>
                    <CreateAnn />
                </Route>
                <Route path='/announcements' exact>
                    <SearchBox />
                    <AnnList />
                </Route>
                <Route path='/announcements/:id' exact>
                    <SelectedAnn />
                    {isEditing ? (
                        <EditingForm />
                    ): null}
                </Route>
            </Switch>
        </Router>
    )
}

export default App;