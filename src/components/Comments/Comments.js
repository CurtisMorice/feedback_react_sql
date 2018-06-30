import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { HashRouter as Router,Switch, Route, Redirect, Link} from 'react-router-dom';

class Comments extends Component {
constructor(){
    super();
    this.state = {



    }
}
render(){
    return(
        <div>
            <h2>You are in the Comments Page</h2>
        </div>
    )
}
}
export default Comments;