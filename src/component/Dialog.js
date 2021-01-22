import React from 'react'
import '../Dialog.css'
import axios from "axios"
function Dialog({apikey}) {
    async function  showResults(){
        const data  = await axios.get(`${apikey}`);
        console.log(data);
    }
    return (
        <div className="Dialog">
            <h1>Results</h1>
            <button onClick={showResults}>show results</button>

        </div>
    )
}

export default Dialog
