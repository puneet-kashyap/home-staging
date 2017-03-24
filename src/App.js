import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Header from './header'
import Portfolio from './portfolio'
import About from './about';
import Contact from './contact';

class App extends Component {
  render() {
    return (
        <div>
        <Navbar />
        <Header />
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
        </div>
    );
  }
}

export default App;
