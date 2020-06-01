import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import Person from './containers/person/person';
import Header from './components/header/header';
import AddPerson from './containers/person/containers/add-person';
import Place from './containers/place/place';
import AddPlace from './containers/place/container/add-place';
import store from './redux/store';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Provider store={store}>
                <Switch>
                    <Route exact path="/person" component={Person} />
                    <Route exact path="/person/new" component={AddPerson} />
                    <Route exact path="/person/edit/:id" component={AddPerson} />

                    <Route exact path="/place" component={Place} />
                    <Route exact path="/place/new" component={AddPlace} />
                    <Route exact path="/place/edit/:id" component={AddPlace} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
