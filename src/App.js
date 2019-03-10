import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />

      </div>
    );
  }
}

export default App;
