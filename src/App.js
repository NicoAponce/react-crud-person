import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Person from './containers/person/person';
import Header from './components/header/header';
import AddPerson from './containers/person/containers/add-person';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/person" component={Person} />
                <Route exact path="/person/new" component={AddPerson} />
                <Route exact path="/person/edit/:id" component={AddPerson} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
