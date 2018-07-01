import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  } )

class ThankYou extends Component{
        componentDidMount(){
            this.submitFeedback();
            this.props.dispatch({type: 'CLEAR', payload: {}});
        }
    
        submitFeedback(){
            axios.post('api/feedback', this.props.feedbackReducer).then().catch((error)=>{
                // alert('Go back to the beginning!');
            }); 
        }
    
        render(){
            return(
                <div>
                    <button><Link to='/'>Submit more feedback</Link></button>
                </div>
            );
        }
    }
    
    

export default connect(mapReduxStateToProps)(ThankYou);