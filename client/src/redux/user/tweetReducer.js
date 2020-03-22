//importing actions types for all actions
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './tweetTypes';

//initial state
const initialState = {
	loading : false,
	tweets  : [],
	error   : ''
};

//defininng reducer for all action dispatching
const reducer = (state = initialState, action) => {
	switch (action.type) {

		//wiil return whole state and modifided loading state for first user req action 
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading : true
			};
		//for user succes request
		case FETCH_USERS_SUCCESS:
			return {
				loading : false,
				tweets  : action.payload,
				error   : ''
			};
		//user failure request
		case FETCH_USERS_FAILURE:
			return {
				loading : false,
				tweets  : [],
				error   : action.payload
			};
		default:
			return state;
	}
};

export default reducer;
