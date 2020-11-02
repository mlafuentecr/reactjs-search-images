import React from 'react';
import axios from 'axios';
import './components/css/App.css';
import logo from './components/images/logo192.png';
import SearchBar from './components/SearchBar';

async function onFormSubmit(term) {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		params: { query: term },
		headers: {
			Authorization: 'Client-ID iCxEwOp0QkggOnGU1XP7SRLNQArxL5pBV84YJAadDHQ',
		},
	});
	console.log(response.data.results);
}


function App() {
	const ImageList = () => {
		return (
			<div className='ui small images'>
				<img alt='' src='/images/wireframe/image.png' />
				<img alt='' src='/images/wireframe/image.png' />
				<img alt='' src='/images/wireframe/image.png' />
				<img alt='' src='/images/wireframe/image.png' />
			</div>
		);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<img className='App-logo' src={logo} alt='' />
				<h2>IMG Searcher</h2>
			</header>

			<main className='main   '>
				<div className='container '>
					<SearchBar onFormSubmit={onFormSubmit} />
					<ImageList />
				</div>
			</main>
		</div>
	);
}

export default App;
