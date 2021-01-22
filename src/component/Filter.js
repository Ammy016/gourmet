import React , {useState} from 'react'
import '../setter.css'

import { InputLabel ,Slider,Select,Typography,FormControl ,MenuItem, TextField} from '@material-ui/core';
import Dialog from './Dialog';


function Filter() {
    
    const [meal , setMeal] = useState("Breakfast");
    const [ carbs , setCarbs] = useState([0,50]);
    const [proteins , setProteins] = useState([0,60]); 
    const [maxReadyTime , setMaxReadyTime] = useState(45);
    const [display , setDisplay] = useState(false);
    const handlecomplexSubmit = (e) =>{
        // e.preventDefault();
        setDisplay(true);
    }
    let apikey = `https://api.spoonacular.com/recipes/complexSearch?apiKey=00cc7de7407049f0aa1490e143e2081a&type=${meal}&minCarbs=${carbs[0]}&maxCarbs=${carbs[1]}&minProteins=${proteins[0]}&maxProteins=${proteins[1]}&maxReadyTime=${maxReadyTime}`;
    return (
        <div >
              <div className="confige-head">
                    <h2>Configure your meal</h2>
              </div>  
              <div className="filter">
                  
                    <FormControl variant="filled" >
                            <InputLabel id="meal-type">Meal type</InputLabel>
                            <Select
                            labelId="meal-type"
                            id="meal-select"
                            value={meal}
                            onChange={ (e) => setMeal(e.target.value)}
                            variant="filled"
                            >          
                                <MenuItem value="" disabled>Select Meal</MenuItem>
                                <MenuItem value="Breakfast">Breakfast</MenuItem>
                                <MenuItem value="Lunch">Lunch</MenuItem>
                                <MenuItem value="Snacks">Snacks</MenuItem>
                                <MenuItem value="Dinner">Dinner</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl>
                        <div id = "carbs">
                                <Typography id = "carbs-slider-head" gutterBottom>Set carbs</Typography>
                                <Slider
                                    value={carbs}
                                    onChange={ (e,value) => setCarbs(value)}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    color="primary" 
                                    aria-label="carbs"
                                    labelId="carbs-slider-head"
                                />
                         </div>
                    </FormControl>
                    <FormControl>
                        <div id = "proteins">
                        <Typography id = "proteins-slider-head" gutterBottom>Set proteins</Typography>
                                <Slider
                                    value={proteins}
                                    onChange={ (e,value) => setProteins(value)}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    color="primary" 
                                    aria-label="proteins"
                                    labelId="proteins-slider-head"
                                />
                        </div>
                    </FormControl>
                    <FormControl>
                        <div id = "maxtime-field">
                            <TextField id="filled-number" 
                            defaultValue={maxReadyTime}
                            onChange={ (e,value) => setMaxReadyTime(value)}
                            label="Max Ready Time(Minutes)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            variant="filled"  
                            />
                            
                        </div>
                    </FormControl>
              </div>
              <div id="complex-search-btn-container">
               <button  id="complex-search-btn" onClick={() => handlecomplexSubmit()}>Search</button>
              </div>
              {display&&<Dialog apikey={apikey}/> }
        </div>
    )
}

export default Filter
