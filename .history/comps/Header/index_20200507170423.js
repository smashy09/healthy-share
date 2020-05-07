import React from 'react';
import Link from 'next/link';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';


const logoImg = require('./logo.png');

const Header = ({ text, color, fontSize, text1, text2, text3,lineHeight}) => <div>
    <div className="HeaderContainer">
        <Link href="/HomePage"> <div className="HeaderLogo" style={{color, fontSize}} ><img src={logoImg} /><div>{text}</div></div></Link>
        <div className="HamburgerMenu" onClick={MenuToggle}><GiHamburgerMenu size="35" /></div>
        <div className="HamburgermenuContainer" style={{fontSize, lineHeight}}>
            <Link href="/InformationPage"><div className="HamburgerItem">{text1}</div></Link>
            <Link href="/Survey1"><div className="HamburgerItem">{text2}</div></Link>
            <Link href="/ResultPage"><div className="HamburgerItem">{text3}</div></Link>
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
    if (menuState === true) {
        document.querySelector(".HamburgermenuContainer").style.display = "none";
        menuState = false;

    } else {
        document.querySelector(".HamburgermenuContainer").style.display = "block";
        menuState = true;
    }
}

export default Header;