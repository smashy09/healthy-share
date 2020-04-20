import React from 'react';
import './hamburgermenu.css'

const HamburgerMenu = ({text1, text2, text3, text4, fontSize, lineHeight}) => <div>
    <div className="HamburgermenuContainer" style={{fontSize, lineHeight}}>
        <div className="HamburgerItem">{text1}</div>
        <div className="HamburgerItem">{text2}</div>
        <div className="HamburgerItem">{text3}</div>
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