import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import  {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
     <Header />
    );
  }
}

export default App;
