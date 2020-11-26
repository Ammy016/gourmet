import React, { Component } from 'react'
import Cards from './Cards'
import '../Popular.css'
import axios from 'axios'

class Popular extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             val: ''
        }
    }
    
    

    getData = async () =>  {
        const api1 = 'https://api.spoonacular.com/recipes/random?apiKey=00cc7de7407049f0aa1490e143e2081a&number=3'
        let res = await axios.get(api1);
        this.setState({val : res});
        


    //    let data = res.data.recipes[0].title;
    //    let image = res.data.recipes[0].image;
    //    console.log(data , image);
    //    this.setState({ title: data,
    //                    imageUrl: image   });
       
    }

    componentDidMount(){
        this.getData();
    }

    createUi = () =>{
        let arr  = this.state.val.data.recipes ; 
        let ui = arr.map((obj,index) => {
           return  <Cards object={obj} key={index}/>
        });
        console.log(ui);
        return ui ;
    }

    // componentDidMount(){
    //     this.getData();
    // }

    render() {

        let flag = '';

        if(this.state.val === ''){
            flag = <h1> fetching.....</h1>
        }else{
            flag = <>  
            <h1 className="featured" style={{ fontFamily: `'Lobster', cursive`,
                fontSize: "36px",color: "black"}}>Popular</h1>

            <hr className="line" style={{borderTop :" 3px solid black",
                marginBottom: "40px"}}></hr>

            <div className="collection" style={{display:"flex", justifyContent:"space-evenly"}}>
                {this.createUi()}
            </div>   </> 
        }



        return (
            <> 
                {flag}
            </>
        )
    }
}

export default Popular
