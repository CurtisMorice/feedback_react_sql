import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import  {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import CardBox from '../CardBox/CardBox';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';



class App extends Component {
  render() {
    return (
      <div>
        <Header header />
        <Router>
        <div>
      
      <Link to='/feeling'> Get Your Feelings </Link>
     <Route path = '/feeling' component={Feeling} />
      <Link to='/'> Home </Link>
     <Route exact path = '/' component={Home} />
     
     </div>
     </Router>
      </div>
    )
  }
}

export default App;
