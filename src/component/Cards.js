
import React, { Component } from 'react'
import '../Cards.css'
import TimerIcon from '@material-ui/icons/Timer';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

 class Cards extends Component {
     
     constructor(props) {
         super(props)
     
         this.state = {
              fav : false
         }

         this.clickHandler = this.clickHandler.bind(this);
     }

     clickHandler(e){
         this.setState((state)=>({
             fav : !state.fav 
         }))
         
     }
     
       
     sample = () => {
            let mystyles = {
                backgroundImage : 'url('+ this.props.object.image + ')',
                height:"200px",
                /* width: 100px; */
                backgroundSize: "cover",
                backgroundPosition: "center"
            }

            let favIcon = this.state.fav ? <FavoriteIcon  color="secondary"/> : <FavoriteBorderIcon />


                //  this.state.fav ? "secondary":"";
            
               return <> 
                {<div className="card">
                 <div className="imgContainer" style={mystyles}></div>
                 < div className="cardBody">
                 <div className="head">
                     <h3>{this.props.object.title}</h3>
                     <IconButton onClick={this.clickHandler} color="secondary" >{favIcon}</IconButton>
                 </div>    
                     <div className="details">
                      <p><TimerIcon/><br/><span> {this.props.object.readyInMinutes}</span> Min</p>
                        
                        <Button variant="outlined" color="secondary">
                            View Recipe  <ArrowForwardIosSharpIcon fontSize="small"/>
                        </Button>
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

