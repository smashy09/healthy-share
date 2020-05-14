import React from 'react';
import './animation.css';
import mySvg from './data.svg'

const animationguy = require('./guywaving.png');
const animationgirl = require('./girlwaving.png');


const Animation = ({}) => <div
  className="Animation_Page">
   <div className='anim'>
            <img src={mySvg} />
        </div>
</div>


Animation.defaultProps = {
  animationguy: animationguy,
  animationgirl: animationgirl
}

export default Animation; 