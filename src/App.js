import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Header from './header'
import Portfolio from './portfolio'
import About from './about';
import Contact from './contact';
import Map from './map';

class App extends Component {
  render() {
    return (
        <div>
        <Navbar />
        <Header />
        <Footer/>
        </div>
    );
  }
}

export default App;
