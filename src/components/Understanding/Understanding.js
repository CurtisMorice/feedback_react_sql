import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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

    console.log(this.state.info);
   console.log('You have selected:', this.state.selectedOption);
   const action = {type: 'SUBMIT_UNDERSTANDING', payload: this.state.selectedOption };
   this.props.dispatch({...action}) 
   console.log('this.props.dispatch(action)',{action});
  
 }
 submitFeedback = () =>{
    axios.post('api/feedback', this.props.feedbackReducer)
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

    <form >
     <div className='radio'>
     <label> 
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '1'} value='1' name='feeling' inputid='one'/>
         </label>
         <label htmlFor='one'><em>I don't care</em></label> 
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '2'} value='2' name='feeling' inputid='two'/>
         </label>
         <label htmlFor='two'><em>WhatTF, WhoTf, WhyTf I need mommy</em></label>
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '3'} value='3' name='feeling' inputid='three'/>
         </label>
         <label htmlFor='three'><em>Hmmmm I am not quite here</em></label>
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '4'} value='4' name='feeling' inputid='four'/>
         </label>
         <label htmlFor='four'><em>Where am I </em></label>
         <label>
         <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '5'} value='5' name='feeling' inputid='five'/>
         </label>
         <label htmlFor='five'><em>I am the smartest man alive</em></label>
         </div>
         
                  <Button type='submit' className ='btn btn-default'  size="small" color="primary" onClick={() => this.handleSubmit(this)}> <Link to={'/support'}>Next</Link></Button>
 
      </form>
        
 </div>
 
        );
    }
}
export default connect(mapReduxStateToProps)(Understanding);