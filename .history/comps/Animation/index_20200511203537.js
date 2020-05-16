import React from 'react';
import './animation.css';
import mySvg from './data.json';

const Animation = ({}) => <div
  className="Animation_Page">
   <div className='anim'>
   <img src={mySvg} alt="icon" />
        </div>
</div>


Animation.defaultProps = {

}

export default Animation; 