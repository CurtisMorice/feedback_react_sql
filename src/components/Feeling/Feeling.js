import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';



const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  } )
class Feeling extends Component {
    constructor(){
super();
this.state = {
    input: '',
    feeling: ''
    }
 }
 
handleSubmit = (form) =>{ 

   form.preventDefault();
   console.log('You have selected:', this.state.selectedOption);
   const action = {type: 'SUBMIT_FEELING', payload: this.state.selectedOption };
   this.props.dispatch(action) 
   console.log('this.props.dispatch(action)',{action});
  
 }
 submitFeedback = () =>{
    axios.post('api/feedback', this.props.feedbackReducer)
    .then((response)=>{

    }).catch((error)=>{
      console.log('Error in post', error);
    })
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
        <label htmlFor='one'><em>shittee</em></label> 
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '2'} value='2' name='feeling' inputid='two'/>
        </label>
        <label htmlFor='two'><em>I got out of bed</em></label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '3'} value='3' name='feeling' inputid='three'/>
        </label>
        <label htmlFor='three'><em>I got out of bed</em></label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '4'} value='4' name='feeling' inputid='four'/>
        </label>
        <label htmlFor='four'><em>better than yesterday</em></label>
        <label>
        <input onChange={this.handleOptionChange} type='radio' checked={this.state.selectedOption === '5'} value='5' name='feeling' inputid='five'/>
        </label>
        <label htmlFor='five'><em>5ive knives</em></label>
        </div>
                
                 <Button type='submit' className ='btn btn-default'  size="small" color="primary" onClick={() => this.handleClick(this)}><Link to={'/understanding'}>Next </Link></Button>       
     </form>
       
</div>

        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);