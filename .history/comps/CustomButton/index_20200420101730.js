import React from 'react';
import './button.css';

//madec the UI

const CustomButton = () => <div className="custom_button_box">
<button className="custom_button">Start Survey</button>
</div>

CustomButton.defaultProps = {
    backgroundColor:"#F3F2EE",
    onClick:()=>{}
}
export default CustomButton;