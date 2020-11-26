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
            <form onSubmit={handleSubmit}>
             <input className="searchBar"  placeholder="In search of taste...." />
             <IconButton type="submit"> 
                 <SearchIcon/>
             </IconButton>
            </form>
            
        </div>
    )
}

export default Search
