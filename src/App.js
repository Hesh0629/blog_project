import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
const App = () => {
	return (
		<div class="app">
			<Home />
		</div>
	);
};
export default React.memo(App);