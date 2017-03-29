import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Header from './header'
import Portfolio from './portfolio'
import About from './about';
import Contact from './contact';
import Map from './map'

class App extends Component {
  render() {
    return (
        <div>
        <Navbar />
        <Header />
        <Portfolio/>
        <About/>
        <Contact/>
        <Map/>
        <Footer/>
        </div>
    );
  }
}

export default App;
