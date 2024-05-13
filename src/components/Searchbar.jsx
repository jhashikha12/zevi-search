import React, { useState } from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SuggestionBox from './SuggestionBox';
import { Results } from './Results';

function Searchbar(){
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false)
    const handleSearchClick = (e) => {
        e.preventDefault();
        setShowSuggestions(true);
    }
    const submitted = (e) => {
        e.preventDefault();
        setShowSuggestions(true);
        setFormSubmitted(true);
    }

    return (
        <>
        {formSubmitted ? (
            <Results/>
        ) : (<>
            <form 
            className='search'
           
            >        
                <input className="searchbar" type="text" placeholder="Search" onClick={handleSearchClick} />
                <button type="submit" className="search-icon" onClick={submitted}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        
        {showSuggestions && <SuggestionBox />}
        </>
        )}
        </>
    );
}

export default Searchbar;
