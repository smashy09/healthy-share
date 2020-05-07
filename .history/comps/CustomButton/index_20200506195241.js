import React from 'react';
import './button.css';

//madec the UI

const CustomButton = ({text, backgroundColor, color, onClick, onHover}) => <div className="custom_button_box">
<button className="custom_button" style={{backgroundColor:backgroundColor, color:color}} onClick={onClick} onMouseOver={(event) => this.onHover(event)}> {text} </button>
</div>

function ButtonClick() {
    alert("clicked")
}

function onHover() {
    alert("clicked")
    document.querySelector('.custom_button').style.boxShadow = 0;
}


CustomButton.defaultProps = {
    backgroundColor:"#37513B",
    color:"#DEEDEC",
    text:"Start Survey",
    onClick:ButtonClick,
    onMouseOver:onHover
}
export default CustomButton;