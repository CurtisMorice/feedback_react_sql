import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { HashRouter as Router,Switch, Route, Redirect, Link} from 'react-router-dom';
import axios from 'axios';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import CardBox from '../CardBox/CardBox';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  } )
class Feeling extends Component {
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
   const action = {type: 'SUBMIT_FEELING', payload: this.state.selectedOption };
   this.props.dispatch(action) 
   console.log({action});
  
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
           <h2>How are you Feeling? Like we care because we are giving you a button instead of an input box because I cant figure out how to get either to an array</h2>

      <form onSubmit={this.handleSubmit}>
    <div className='radio'>
    <label> 
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '1'} value='1' name='feeling' inputid='one'/>
        </label>
        <label htmlFor='one'>One</label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '2'} value='2' name='feeling' inputid='two'/>
        </label>
        <label htmlFor='two'>Two</label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '3'} value='3' name='feeling' inputid='three'/>
        </label>
        <label htmlFor='three'>Three</label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '4'} value='4' name='feeling' inputid='four'/>
        </label>
        <label htmlFor='four'>Four</label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '5'} value='5' name='feeling' inputid='five'/>
        </label>
        <label htmlFor='five'>Five</label>
        </div>
        
                 <Button type='submit' className ='btn btn-default'  size="small" color="primary" onClick={() => this.handleClick(this)}>Submit</Button>

     </form>
       
</div>

        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);