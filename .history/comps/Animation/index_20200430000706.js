import React from 'react';
import './animation.css';

const animationguy= require('./guywaving.png');
const animationgirl= require('./girlwaving.png');

const Animation = ({animationguy,animationgirl}) => <div
className="Animation_Page"> 
  <div class="guy">
           <img src={animationguy} />
           <img src={animationgirl} />
         </div>
</div>

Animation.defaultProps = {
    
}

export default Animation;