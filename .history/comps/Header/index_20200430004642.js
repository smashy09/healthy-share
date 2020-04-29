import React from 'react';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';

const logoImg = require('./logo.png');

const Header = ({ text, color, fontSize, text1, text2, text3,lineHeight}) => <div>
    <div className="HeaderContainer">
        <div className="HeaderLogo" style={{color, fontSize}} ><img src={logoImg} /><div>{text}</div></div>
        <div className="HamburgerMenu" onClick={MenuToggle}><GiHamburgerMenu size="35" /></div>
        <div className="HamburgermenuContainer" style={{fontSize, lineHeight}}>
            <div className="HamburgerItem">{text1}</div>
            <div className="HamburgerItem">{text2}</div>
            <div className="HamburgerItem">{text3}</div>
        </div>
    </div>
</div>

Header.defaultProps = {
    text: "Healthy-U",
    color: "#fff",
    fontSize: "13pt",
    text1: "Tutorial",
    text2: "Survey",
    text3: "Result",
    lineHeight: "2em"
}


var menuState = false;
function MenuToggle() {
    if (menuState === false) {
        document.querySelector(".HamburgermenuContainer").className = "inactive";
        menuState = true;

    } else {
        document.querySelector(".HamburgermenuContainer").className = "active";
        menuState = false;
    }
}

export default Header;