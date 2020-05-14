import React from 'react';
import './animation.css';
import mySvg from './data.svg'



const Animation = ({}) => <div
  className="Animation_Page">
   <div className='anim'>
            <img src={mySvg} />
        </div>
</div>


Animation.defaultProps = {

}

export default Animation; 