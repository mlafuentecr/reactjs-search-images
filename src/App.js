import React, {useState} from 'react';
import unSplash from '../src/api/unsplash';
import './components/css/App.css';
import logo from './components/images/logo192.png';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';



function App() {
  
  const [images, setImages]= useState([]);

  // //Query Images on Submit
  // async function onFormSubmit(term) {
  //   const response = await unSplash.get('/search/photos', {
  //     params: { query: term }
  //   });
  //  setImages(response.data.results);
  // }
  


	return (
  
		<div className='App'>
			<header className='App-header'>
				<img className='App-logo' src={logo} alt='' />
				<h2>IMG Searcher</h2>
			</header>

			<main className='main   '>
				<div className='container '>
					<SearchBar  setImages={setImages} />
					<ImageList images={images} />
				</div>
			</main>
		</div>
	);
}

export default App;
