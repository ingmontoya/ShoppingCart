import React, { Component } from 'react';
/*
*IMPORT COMPONENTS
*/
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/layout/Hero'
import ContentCategory from './ContentCategory'
import '../App.css';

class Home extends Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <ContentCategory />
        <Footer />
      </div>
    );
  }
}

export default Home;
