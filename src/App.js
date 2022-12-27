import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
import Header from './Header';
import NotFound from './NotFound';
import Models from './components/models/Models';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
	return (
		<div class="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/models" element={<Models/>}></Route>
					<Route path="*" element={<NotFound/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default React.memo(App);