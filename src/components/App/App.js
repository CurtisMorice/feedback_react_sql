import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import  {HashRouter as Router,Switch, Route, Redirect, Link,NavLink} from 'react-router-dom';
import Header from '../Header/Header';
import Radio from '../Radio/Radio';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import ThankYou from '../ThankYou/ThankYou';

 



class App extends Component {
  render() {
    return (
      <div>
        <Header header />
        <Router>
        <div>
          
          <ul>
            <span>
          <li>
            <NavLink to={'/'} activeStyle={{color: "red"}}>  Go Home </NavLink>
            </li>
            <li>
            <NavLink to={'/feeling'} activeStyle={{color: "blue"}}>Feelings</NavLink>
            </li>
            <li>
            <NavLink to={'/understanding'} activeStyle={{color: "yellow"}}> Understanding </NavLink>
            </li>
            <li>
              <NavLink to={'/support'} activeStyle={{color: "green"}}>Support</NavLink>
            </li>
            <li>
              <NavLink to={'/comments'} activeStyle={{color: "orange"}}>Comments</NavLink>
            </li>
            <li>
              <NavLink to={'/thankyou'} activeStyle={{color: "skyblue"}}>Thank You</NavLink>
            </li>
            <li>
              <NavLink to={'/admin'} activeStyle={{color: "red"}}>Admin</NavLink>
            </li>
            </span>
          </ul>
          
      <hr/>

      <Route path = {'/feeling'} component={Feeling} />
      <Route path = {'/support'} component={Support} /> 
      <Route path = {'/understanding'} component={Understanding} />
      <Route path = {'/comments'} component={Comments} />
      <Route path='/thankyou' component={ThankYou}/>
      <Route path='/admin' component={Admin}/>
      <Route exact path = {'/'} component={Home} />
      
     </div>
     </Router>
      </div>
    )
  }
}

export default App;
