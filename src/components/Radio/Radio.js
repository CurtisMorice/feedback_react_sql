import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';




const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
} )

class Radio extends Component {
  constructor(){
    super();
      this.state = {
        value: '',
        felling:''

      }
  }

render() {
  return (
    <div>
      
    </div>
  )
}




}
 
  
export default  connect(mapReduxStateToProps)(Radio);