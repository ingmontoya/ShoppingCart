import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/*
*IMPORT COMPONENTS
*/
import Home from './pages/Home'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact"  component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
