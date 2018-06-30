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
  
  const feedback = (state = {}, action ) => {
    if (action.type === 'SUBMIT_FEELING') {
      state.feeling = action.payload;
    } else if (action.type === 'SUBMIT_COMPREHENSION') {
      state.understanding = action.payload;
    } else if (action.type === 'SUBMIT_SUPPORT') {
      state.supported = action.payload;
    } else if (action.type === 'FINAL_SUBMIT_COMMENTS') {
      state.comments = action.payload;
      postFeedbackToDatabase(state);
      state = {};
    }
    return state;
  }
const storeInstance = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
