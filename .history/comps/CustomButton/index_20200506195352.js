import React from 'react';
import './button.css';

//madec the UI

const CustomButton = ({text, backgroundColor, onClick}) => <div className="custom_button_box">
<button className="custom_button" style={{backgroundColor:backgroundColor, color:color}} onClick={onClick} > {text} </button>
</div>

function ButtonClick() {
    alert("clicked")
}

CustomButton.defaultProps = {
    backgroundColor:"#37513B",
    color:"#DEEDEC",
    text:"Start Survey",
    onClick:ButtonClick
}
export default CustomButton;