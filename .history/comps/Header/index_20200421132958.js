import React from 'react';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';


const Header = ({ text, color, fontSize}) => <div>
    <div className="HeaderContainer">
        <div className="HeaderLogo" ><div>{text}</div></div>
        <div className="HamburgerMenu"><GiHamburgerMenu size="35" /></div>
    </div>
</div>

Header.defaultProps = {
    text: "Healthy-U",
    color: "#fff",
    fontSize: "13pt"
}

export default Header;