import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './header';
import About from './about';
import Contact from './contact';


ReactDOM.render((
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/contactUs' component={Contact}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
