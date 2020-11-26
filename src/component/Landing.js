import React from 'react'
import Header from './Header'
import '../Landing.css'
import Search from './Search'

function Landing() {
    return (
        <div className="landing">
           <Header/>
           <Search/>
        </div>
    )
}

export default Landing
