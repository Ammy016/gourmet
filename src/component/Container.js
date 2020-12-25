import React from 'react'
import '../Container.css'
import Popular from './Popular'
import Filter from "./Filter.js";

function Container() {
    return (
        <div className="container">
            <Popular/>
             <Filter />
        </div>
    )
}

export default Container
