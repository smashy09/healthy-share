import React from 'react';
import './animation.css';

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

const Animation = ({header, question, backgroundColor, healthytxt, balancedtxt, unhealthytxt, healthyImg, balancedImg, unhealthyImg, onClick}) => <div
style={{backgroundColor:backgroundColor}}
className="Animation_Page"> 

</div>

Animation.defaultProps = {
    
}

export default Animation;