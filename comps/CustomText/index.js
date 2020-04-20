import React from 'react';
import './text.css';


//text

const CustomText = () => <div className="custom_text_box">
<p className="custom_text"></p>
</div>

CustomText.defaultProps = {
    color:"#3A3D42",
    text:"Hello There!",
    fontSize:"10px"
}

export default CustomText;