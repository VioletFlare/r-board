import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component {
  render() {
    return(
      <div className="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;