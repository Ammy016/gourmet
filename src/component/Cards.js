
import React, { Component } from 'react'
import '../Cards.css'

 class Cards extends Component {
     
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     

     sample = () => {
            let mystyles = {
                backgroundImage : 'url('+ this.props.object.image + ')',
                height:"200px",
                /* width: 100px; */
                backgroundSize: "cover",
                backgroundPosition: "center"
            }
            
               return <> 
                {<div className="card">
                 <div className="imgContainer" style={mystyles}></div>
                 < div className="cardBody">
                     <h3>{this.props.object.title}</h3>
                     <div className="details">
                         <p>Servings : <span>
                             {this.props.object.servings}
                         </span></p>
                         <p>Ready In:<span>{this.props.object.readyInMinutes}</span> Min</p>
                     </div>
                 </div>
             </div>}</>
           
            
     }

     
     
    render() {
        return (
            <>
                {this.sample()}
            </>
        )
    }
}

export default Cards

