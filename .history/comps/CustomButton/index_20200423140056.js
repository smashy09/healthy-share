import React from 'react';
import './button.css';

//madec the UI

const CustomButton = ({text, backgroundColor}) => <div className="custom_button_box">
<button className="custom_button" style={{backgroundColor:backgroundColor}} > {text} </button>
</div>

CustomButton.defaultProps = {
    backgroundColor:"#DEEDEC",
    text:"Start Survey"
}
export default CustomButton;