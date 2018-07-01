import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// import { HashRouter as Router, Link, Route} from 'react-route-dom';
import logger from 'redux-logger';
import{ createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

const postFeedbackToDatabase = (feedback) => {
    axios.post('/api/feedback', feedback)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      
  }
  const databaseReducer = (state = [], action) => {
    if( action.type === 'GET'){
        return [...action.payload];
    }
    return state;
} // end databaseReducer

  
  const feedbackReducer = (state = { feeling:'', understanding: '', support: '', comment: ''}, action ) => {
    if (action.type === 'SUBMIT_FEELING') {
      return {...state, feeling: action.payload};
    } else if (action.type === 'SUBMIT_COMPREHENSION') {
      return  {...state, understanding: action.payload};
    } else if (action.type === 'SUBMIT_SUPPORT') {
      return {...state, support: action.payload};
    } else if (action.type === 'SUBMIT_COMMENTS') {
      return {...state, comment: action.payload};
    } else if(action.type === 'RESET'){ return action.payload
    } else {
      return state;
    }
  }// end of feedBackReducer
  

  
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
