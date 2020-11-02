import React, {useState} from 'react'


const SearchBar = (props) => {
  const [inputSearch, setInputSearch] = useState('');
  
	const handleKeyDown = (e) => {
		setInputSearch(e.target.value);
  };
  
  const submitForm = (e, text, props)=>{
    e.preventDefault();
    props.onFormSubmit(text);
  }

  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>Buscador de Imagenes</div>

        <form className='ui form'
        onSubmit={(e)=>submitForm(e, inputSearch, props) } >
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