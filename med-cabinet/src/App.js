import React from 'react';
import './App.css';
import './Login.css';

import { BrowserRouter as Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePageComponents/HomePage';
import Login from './components/Login';
import SearchResults from './components/SearchResults';

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('rooooottt', store);
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/home">
                            <HomePage />
                        </Route>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/SearchResults">
                            <SearchResults />
                        </Route>
                    </Switch>
                </Provider>
            </div>
        );
    }
}

export default App;
