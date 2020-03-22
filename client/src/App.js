import React from 'react';
import './App.css';
import Home from './components/Home';
import Twits from './components/Twits';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" component={Home} exact />
				<Route path="/twits" component={Twits} />
			</Router>
		</Provider>
	);
}

export default App;
