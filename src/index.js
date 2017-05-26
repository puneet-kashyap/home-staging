import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './header';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Services from './services';

ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/portfolio' component={Portfolio}/>
    <Route path='/about' component={About}/>
    <Route path='/services' component={Services}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
