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
    fontSize: "12pt"
}

export default Header;