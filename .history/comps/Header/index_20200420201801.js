import React from 'react';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = ({ text, color}) => <div>
    <div className="HeaderContainer">
        <div className="HeaderLogo" style={{color}} ><div>{text}</div></div>
        <div className="HamburgerMenu"><GiHamburgerMenu size="35" /></div>
    </div>
</div>

Header.defaultProps = {
    text: "Healthy-U",
    color: "#fff",
}

export default Header;