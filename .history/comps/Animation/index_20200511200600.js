import React from 'react';
import './animation.css';
import './data';

const animationguy= require('./images/img_0.png'); 
const animationgirl= require('./images/img_1.png'); 

const Animation = ({}) => <div
className="Animation_Page"> 
<div id="anim">
  <data />
</div>
</div>

Animation.defaultProps = {
  animationguy,
  animationgirl
}

export default Animation;