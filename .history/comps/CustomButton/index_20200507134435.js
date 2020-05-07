import React from 'react';
import './button.css';

//madec the UI

const CustomButton = ({text, backgroundColor, color, onClick}) => <div className="custom_button_box">
<button className="custom_button" style={{backgroundColor:backgroundColor, color:color}} onClick={onClick} > {text} </button>
</div>

function ButtonClick() {
    alert("clicked")
}

CustomButton.defaultProps = {
    backgroundColor:"#7AC74F",
    color:"#00000",
    text:"Start Survey",
    onClick:ButtonClick
}
export default CustomButton;