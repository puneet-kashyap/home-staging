import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Header from './header'

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
