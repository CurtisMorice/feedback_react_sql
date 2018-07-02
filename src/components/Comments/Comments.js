import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Comment extends Component{
    constructor(){
        super();
        this.state =( {
            
            input: ''

            })
         }
         
        handleSubmit = (form) =>{ 
        
           console.log('You have selected:', this.state.input);
           const action = {type: 'SUBMIT_COMMENTS', payload: this.state.input };
           this.props.dispatch({...action}) 
           console.log('this.props.dispatch(action)',{...action});
          
         }
         submitFeedback = () =>{
            axios.post('/feedback', this.props.feedbackReducer)
            .then().catch();
        }
         
         handleChange = (event) => {
        
            this.setState({
            
               
                input: event.target.value
              
            });
         }    // input: event.target.value,
         // feeling: event.target.value,
         
        
        handleClick = (event) => {
        
        this.state.event;
        console.log(event);
        
        }
     
    render(){
        return(
            <div>
                <form>
                <h2>Tell us anything....I MEAN AnyThInG!?!?!</h2>         
                <textarea id="" name="textarea" type={"text"}  onChange={this.handleChange} placeholder="whatever you want to enter in this box "></textarea>
                <Button type='submit' className ='btn btn-default'  size="small" color="primary" onClick={() => this.handleSubmit(this)}>  <Link to='/thankyou'> Next </Link></Button>
                </form>
            </div>
        );
    }
}


export default compose(
    connect(mapReduxStateToProps)
)(Comment);