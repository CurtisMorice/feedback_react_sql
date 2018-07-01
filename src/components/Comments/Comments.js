import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import axios from 'axios';

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Comment extends Component{
    constructor(){
        super();
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
    render(){
        return(
            <div>
                <h2>Tell us anything....I MEAN AnyThInG!?!?!</h2>
                <textarea type="text" onChange={this.handleOptionChange} placeholder="Answer"/>
                <Button type='submit' className ='btn btn-default'  size="small" color="primary" onClick={this.submitFeedback}>  <Link to='/thankyou'> Next </Link></Button>
            </div>
        );
    }
}

Comment.propTypes = {
    nextPage: PropTypes.string,
    question: PropTypes.string,
    actionType: PropTypes.string
};  

export default compose(
    connect(mapReduxStateToProps)
)(Comment);