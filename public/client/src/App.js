import React, { Component } from 'react';
/*
*IMPORT COMPONENTS
*/
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Content from './components/layout/Content'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
