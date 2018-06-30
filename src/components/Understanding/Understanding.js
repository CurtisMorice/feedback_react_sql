import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  } )
class Understanding extends Component {
    constructor(){
        super();
        this.state = {


        }
    }
    render(){
        return(
            <div>You are in the Understanding Page</div>
        )
    }
}
export default connect(mapReduxStateToProps)(Understanding);