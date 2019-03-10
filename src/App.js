import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />

      </div>
    );
  }
}

export default App;
