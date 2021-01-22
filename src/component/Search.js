import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton';
import React , {useRef , useEffect} from 'react'
import '../search.css'

function Search() {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target[0].value);
        event.target.reset();
    }

    const el = useRef();

    useEffect(() => {
        el.current.focus();
        
    })
    

    return (
        <div className="search" >
            <p className ="slogan">Food recipes from the best chef around the world</p>
            <div>
                <form className="searchForm"onSubmit={handleSubmit}>
                <label>
                <input className="searchBar"   ref={el}/>
                </label> 
                <IconButton type="submit"> 
                    <SearchIcon/>
                </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Search
