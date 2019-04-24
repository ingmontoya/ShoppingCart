import React, { Component } from 'react';
/*
*IMPORT COMPONENTS
*/
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTittle from '../components/layout/PageTittle'
import ContentPages from '../components/layout/ContentPages'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageTittle />
        <ContentPages />
        <Footer />
      </div>
    );
  }
}

export default Contact;
