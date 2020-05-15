import React from 'react'; 
import './animation.css'; 
 
const animationguy= require('./guywaving.png'); 
const animationgirl= require('./girlwaving.png'); 

 
 

const Animation = ({animationguy,animationgirl}) => <div 
className="Animation_Page">  
<div class="girl"> 
           <img src={animationgirl} /> 
         </div> 
  <div class="guy"> 
           <img src={animationguy} /> 
           </div> 
</div> 

 
Animation.defaultProps = { 
    animationguy:animationguy, 
    animationgirl:animationgirl 
} 

 
 

export default Animation; 