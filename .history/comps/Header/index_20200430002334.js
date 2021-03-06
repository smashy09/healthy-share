import React from 'react';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';

const logoImg = require('./logo.png');

const Header = ({ text, color, fontSize}) => <div>
    <div className="HeaderContainer">
        <div className="HeaderLogo" style={{color, fontSize}} ><img src={logoImg} /><div>{text}</div></div>
        <div className="HamburgerMenu"><GiHamburgerMenu size="35" /></div>
    </div>
</div>

Header.defaultProps = {
    text: "Healthy-U",
    color: "#fff",
    fontSize: "13pt"
}

const HamburgerMenu = ({text1, text2, text3, fontSize, lineHeight}) => <div onClick={MenuToggle}>
    <div className="HamburgermenuContainer" style={{fontSize, lineHeight}} >
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

export default Header;
export HamburgerMenu;



var menuState = true;

function MenuToggle() {
    if (menuState === false) {
        document.querySelector(".HamburgermenuContainer").style.display = "none";
        menuState = true;

    } else {
        document.querySelector(".HamburgermenuContainer").style.display = "block";
        menuState = false;
    }
}