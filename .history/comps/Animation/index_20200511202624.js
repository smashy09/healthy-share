import React from 'react';
import './animation.css';
import mySvg from './data.svg'

const animationguy = require('./guywaving.png');
const animationgirl = require('./girlwaving.png');


const Animation = { 
   render() {
    return (
        <div className='Anim'>
            <img src={mySvg} />
        </div>
    );
  }
};


Animation.defaultProps = {
  animationguy: animationguy,
  animationgirl: animationgirl
}

export default Animation; 