//for parsing string from url
import queryString from 'query-string';
import { Link } from 'react-router-dom';
//for hooks 
import React, { useEffect, useState } from 'react'
//connecting react app to redux
import {connect} from 'react-redux';
//imporing actions method from tweetActions file  
import {fetchUsers} from '../redux/user/tweetActions'
//toheader component for topheader
import TopHeader from './TopHeader';
//importing css file for this component
import '../css/Twitts.css';
//loader for showing before rendering data
import Loader from './Loader';
//importing css file for topheader
import '../css/TopHeader.css';


//functional component usinng hooks
function Twits({userData, fetchUsers}) {
	//state for query string updation
	const [query,setQuery] = useState("");
	//state for search button click 	
	const [count,setCount] = useState(0);

	//fetching data from redux store using query string 
    useEffect(() => {
		//parsing string from url
		const req = queryString.parse(window.location.search).query;
		//fetching tweets
		fetchUsers(req)
	}, [count,queryString.parse(window.location.search).query])

	return (	
		<div>
				<div>
				<nav>
					<input type="checkbox" id="check" />
					<label for="check" class="checkbtn">
						<i class="fas fa-bars" />
					</label>
					<label class="logo">Twitter</label>
					<ul className="mr-auto">
						<li>
							<form class="form-inline my-2">
								<input
									className="form-control mr-sm-2"
									placeholder="Search..."
									onChange={(e) => setQuery(e.target.value)}
								/>
								<Link to={`/twits?query=${query}`}>	
									<button className="btn btn-light my-2 my-sm-0" onClick={() => {setCount(count+1)}}>
										Search
									</button>	
									</Link>
							</form>
						</li>
						&nbsp;&nbsp;&nbsp;
						<li>
							<a class="" href="/" style={{ textDecoration: 'none' }}>
								Home
							</a>
						</li>
						&nbsp;&nbsp;
					</ul>
				</nav>
			</div>
		
			<br />
			<br />
			{!userData.tweets.statuses ? (
				<Loader />
			) : (
				<React.Fragment>
					<div className="main_heading" style={{ marginTop: 50 }} />
					<div className="main_heading" style={{ zIndex: 0 }}>
						{userData.tweets.statuses.length ? (
							userData.tweets.statuses.map((data, i) => {
								const { id, created_at, text } = userData.tweets.statuses[i];
								const { name, followers_count } = userData.tweets.statuses[i].user;
								return (
									<div key={id} className="track" style={{ borderRadius: 50 }}>
										<div class="card twit-div">
											<div class="card-header">
												<p>
													{name}- {followers_count} Followers
												</p>
											</div>
											<div class="card-body text-div">{text}</div>
											<div class="card-footer">{created_at}</div>
										</div>
									</div>
								);
							})
						) : (
							<h1 style={{ marginTop: 300 }}>No Result...</h1>
						)}
					</div>
				</React.Fragment>
			)}
		</div>
	);
	
}

//return tweets state from redux-store
const mapStateToProps = state =>
{
    return {
        userData: state.tweets
    }
}

//making functionn call to redux actions for diapacting action of getting tweets
const mapDispatchToProps = dispatch =>
{
    return {
        fetchUsers : (query) => dispatch(fetchUsers(query))
    }
}

//conneting react app to redux
export default connect(mapStateToProps,mapDispatchToProps)(Twits)
