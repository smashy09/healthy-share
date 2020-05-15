import React from 'react'; 
import './animation.css'; 
 
const animationguy= require('./guywaving.png'); 
const animationgirl= require('./girlwaving.png'); 
const animationarmguy= require('./guyArm.png'); 



const Animation = ({animationguy,animationgirl,animationarmguy}) => <div 
className="Animation_Page">  
<div class="girl"> 
           <img src={animationgirl} /> 
         </div> 
  <div class="guy"> 
           <img src={animationguy} /> 
           </div> 
           <div class="armguy"> 
           <img src={animationarmguy} /> 
           </div>
</div> 

 
Animation.defaultProps = { 
    animationguy:animationguy, 
    animationgirl:animationgirl,
    animationarmguy:animationarmguy
} 

 
 

export default Animation; 