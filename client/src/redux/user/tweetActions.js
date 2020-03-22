//importing actions types for all actions
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './tweetTypes';
//for making api calls
import axios from 'axios';

//action for user request 
export const fetchUsersRequest = () => {
	return {
		type : FETCH_USERS_REQUEST
	};
};

//action for user request success
export const fetchUsersSuccess = (tweets) => {
	return {
		type    : FETCH_USERS_SUCCESS,
		payload : tweets
	};
};

//action for user request failure
export const fetchUsersFailure = (error) => {
	return {
		type    : FETCH_USERS_FAILURE,
		payload : error
	};
};

//getting query parameter from user and process it to reducer for dispatching actions to get all tweets releavent to query
export const fetchUsers = (query) =>
{
    return (dispatch) =>
    { 
        //dispatching user request
        dispatch(fetchUsersRequest)
        //making api call to server to get tweets 
        axios({
            url    : '/api/search',
            method : 'POST',
            data   : {query : query}
        }).then(
            res=> {
                let tweets = res.data.data
                //dispathing success action with received tweets argument
                dispatch(fetchUsersSuccess(tweets))
            }
        )
        .catch(error=>
            {
                const errorMsg = error.message
                //dispatching failure action with error message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}