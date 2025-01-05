import React from 'react';
import './assets/css/root.css';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</Router>
	);
}

