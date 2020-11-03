import React, {useState} from 'react'
import unSplash from '../api/unsplash';

const SearchBar = (props) => {
  const [inputSearch, setInputSearch] = useState('');

	const handleKeyDown = (e) => {
		setInputSearch(e.target.value);
  };
  
  
  //Query Images on Submit
  async function onFormSubmit(e, term, props) {
    e.preventDefault();
    const response = await unSplash.get('/search/photos', {
      params: { query: term }
    });
   props.setImages(response.data.results);
  }
  


  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>Buscador de Imagenes</div>

        <form className='ui form'
        onSubmit={(e)=>onFormSubmit(e, inputSearch, props) } >
          <div className='ui icon input searchWrap' key="test">
            <i className='search icon'></i>
            <input
              type='text'
              placeholder='Search image herex'
              value={inputSearch}
              onChange={handleKeyDown}
            />
          </div>
        </form>

      </div>
    </div>
  );
};

export default SearchBar;