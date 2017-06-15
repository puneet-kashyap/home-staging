import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {logger} from 'redux-logger';

import App from './App';
import './index.css';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Services from './services';
import allReducers from './reducers';
import {initiateDB} from './actions';
import {initiateStorage} from './actions';

const middleware = applyMiddleware(logger)
export const store = createStore(allReducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
initiateDB()
initiateStorage()