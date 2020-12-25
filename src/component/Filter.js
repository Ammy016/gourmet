import React , {useState} from 'react'
import '../setter.css'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import { InputLabel } from '@material-ui/core';

function Filter() {

    const [meal , setMeal] = useState("Breakfast");
    const [ carbs , setCarbs] = useState([20,50]);

   
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

              </div>
        </div>
    )
}

export default Filter
