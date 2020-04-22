import React from 'react';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => <div>
    <div className="HeaderContainer">
        <div className="HeaderLogo"><div>Healthy-U</div></div>
        <div className="HamburgerMenu"><GiHamburgerMenu size="35" /></div>
    </div>
</div>

export default Header;