import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton';
import { Input } from '@material-ui/core';
import React from 'react'
import '../search.css'

function Search() {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target[0].value);
        event.target.reset();
    }
    return (
        <div className="search">
            <p className ="slogan">Food recipes from the best chef around the world</p>
            <form className="searchForm"onSubmit={handleSubmit}>
            <label>
             <input className="searchBar"   />
            </label> 
             <IconButton type="submit"> 
                 <SearchIcon/>
             </IconButton>
            </form>
            
        </div>
    )
}

export default Search
