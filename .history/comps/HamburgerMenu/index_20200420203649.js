import React from 'react';
import './hamburgermenu.css'

const HamburgerMenu = ({text1, text2, text3, text4, fontSize, lineHeight}) => <div>
    <div className="HamburgermenuContainer" style={{fontSize, lineHeight}}>
        <div>{text1}</div>
        <div>{text2}</div>
        <div>{text3}</div>
        <div>{text4}</div>
    </div>
</div>

HamburgerMenu.defaultProps = {
    text1: "Tutorial",
    text2: "Survey",
    text3: "Result",
    fontSize: "20pt",
    lineHeight: "2em"
}

export default HamburgerMenu;