import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/*
*IMPORT COMPONENTS
*/
import Home from './pages/Home'
import Contact from './pages/Contact'
import DetailProduct from './pages/DetailProduct'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact"  component={Contact} />
            <Route exact path="/DetailProduct/:id"  component={DetailProduct} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
