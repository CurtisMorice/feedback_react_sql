import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import axios from 'axios';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  } )


  class Understanding extends Component {
    constructor(){
super();
this.state = {
    value: '',
    input: '',
    feeling: ''
    }
 }
 
handleSubmit = (form) =>{ 

   form.preventDefault();
   console.log('You have selected:', this.state.selectedOption);
   const action = {type: 'SUBMIT_UNDERSTANDING', payload: this.state.selectedOption };
   this.props.dispatch(action) 
   console.log('this.props.dispatch(action)',{action});
  
 }
 submitFeedback = () =>{
    axios.post('/feedback', this.props.feedbackReducer)
    .then().catch();
}
 
 handleOptionChange = (event) => {

    this.setState({
        // input: event.target.value,
        // feeling: event.target.value,
        selectedOption: event.target.value
      
    });
 }
 

handleClick = (event) => {

this.state.event;
console.log(event);

}
getInitialState =() => {
    return {
      selectedOption: '1'
    };
  }

    render() {
        return (
    
    <div>
    <h2>Understanding is nice. I wish I was understanding how to do this weekend project. How about yourself</h2>

    <form onSubmit={this.handleSubmit}>
     <div className='radio'>
     <label> 
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '1'} value='1' name='feeling' inputid='one'/>
         </label>
         <label htmlFor='one'><em>shittee</em></label> 
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '2'} value='2' name='feeling' inputid='two'/>
         </label>
         <label htmlFor='two'><em>I got out of bed</em></label>
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '3'} value='3' name='feeling' inputid='three'/>
         </label>
         <label htmlFor='three'></label>
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '4'} value='4' name='feeling' inputid='four'/>
         </label>
         <label htmlFor='four'><em>better than yesterday</em></label>
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '5'} value='5' name='feeling' inputid='five'/>
         </label>
         <label htmlFor='five'><em>5ive knives</em></label>
         </div>
         
                  <Button type='submit' className ='btn btn-default'  size="small" color="primary" onClick={() => this.handleClick(this)}>Submit</Button>
 
      </form>
        
 </div>
 
        );
    }
}
export default connect(mapReduxStateToProps)(Understanding);