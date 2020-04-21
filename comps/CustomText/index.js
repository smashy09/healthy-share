import React from 'react';
import './text.css';


//text

const CustomText = ({text, fontSize, color}) => <div className="custom_text_box">
<p>{text}</p>
</div>

CustomText.defaultProps = {
    text:"Hello There!",
    fontSize:10,
    color:"#3A3D42"
}

export default CustomText;