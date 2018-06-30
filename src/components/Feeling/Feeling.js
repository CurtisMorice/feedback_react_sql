import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { HashRouter as Router,Switch, Route, Redirect, Link} from 'react-router-dom';

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
  
    feeling: '',
    }
 }
 
handleSubmit = (event) =>{ 
const action = {type: 'SUBMIT_FEELING', payload: this.state.feeling };
   this.props.dispatch(action) 
   console.log({action});
   event.preventDefault();
  
 }
 
 handleChange = (event) => {

    this.setState({
        feeling: event.target.value,
        selectedOption: event.target.value
      
    });
 }
 

handleClick = (event) => {

this.state.event;
console.log(event);

}
getInitialState =() =>{
    return {
      selectedOption: 'option1'
    };
  }


render() {
return (
    
  <div>
           <h2>How are you Feeling? Like we care because we are giving you a button instead of an input box because I cant figure out how to get either to an array</h2>

      <form onSubmit={this.handleSubmit}>
    <div className='radio'>
    <label> 
        <input onChange={this.handleChange} type='radio' checked={this.state.getInitialState === 'option1'} value='option1' value={this.state.feeling} name='feeling' inputid='one'/>
        </label>
        <label htmlFor='one'>One</label>
        <label>
        <input onChange={this.handleChange} type='radio' checked={this.state.getInitialState === 'option2'} value='option2' value={this.state.feeling} name='feeling' inputid='two'/>
        </label>
        <label htmlFor='two'>Two</label>
        <label>
        <input onChange={this.handleChange} type='radio' checked={this.state.getInitialState === 'option3'} value='option3' value={this.state.feeling} name='feeling' inputid='three'/>
        </label>
        <label htmlFor='three'>Three</label>
        <label>
        <input onChange={this.handleChange} type='radio' checked={this.state.getInitialState === 'option4'} value='option4' value={this.state.feeling} name='feeling' inputid='four'/>
        </label>
        <label htmlFor='four'>Four</label>
        <label>
        <input onChange={this.handleChange} type='radio' checked={this.state.getInitialState === 'option5'} value='option5' value={this.state.feeling} name='feeling' inputid='five'/>
        </label>
        <label htmlFor='five'>Five</label>
        </div>
        </form>
                 <Button size="small" color="primary" onClick={() => this.handleClick(this)}>Submit</Button>

     
       
</div>

        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);