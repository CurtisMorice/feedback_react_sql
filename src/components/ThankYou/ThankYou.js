import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  } )
  

class ThankYou extends Component{
     
    
        submitFeedback(){
            axios.post('/api/feedback', this.props.feedbackReducer)      
            .then((response) => {
                window.confirm('You have completed your feedback, thanks! Would you like to start over? If so please push the "I want to be HaPPiEr button')

                console.log(response);
              }) 
              .catch((error) => {
                console.log(error.response);
              })
              
          }
               
          componentDidMount(){
            this.submitFeedback();
            this.props.dispatch({type: 'CLEAR', payload: {}});
        }
        
    
        render(){
            return(
                <div>
                    <button><Link to='/'>HaPPiEr</Link></button>
                </div>
            );
        }
    }
   



    

export default connect(mapReduxStateToProps)(ThankYou);