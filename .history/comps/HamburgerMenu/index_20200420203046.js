import React from 'react';
import './hamburgermenu.css'

const HamburgerMenu = ({text}) => <div>
    <div className="HamburgermenuContainer">
        <div>{text1}</div>
        <div>{text2}</div>
        <div>{text3}</div>
        <div>{text4}</div>
    </div>
</div>

HamburgerMenu.defaultProps = {
    text1: "Tutorial",
    text2: "Survey",
    text3: "Result"
}

export default HamburgerMenu;