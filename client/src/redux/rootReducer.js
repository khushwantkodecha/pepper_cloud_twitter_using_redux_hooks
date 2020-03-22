//to comnine more than one reducer
import { combineReducers } from 'redux';
import tweetReducer from './user/tweetReducer';

const rootReducer = combineReducers({
	tweets : tweetReducer
});

export default rootReducer;
