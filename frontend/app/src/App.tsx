import React from 'react';
import './assets/css/root.css';
import BlogPage from './pages/BlogPage.tsx';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/blog' element={<BlogPage />} />
			</Routes>
		</Router>
	);
}

