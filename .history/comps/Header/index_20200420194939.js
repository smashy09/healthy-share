import React from 'react';
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => <div>
    <div className="Header">
        <div className="HeaderLogo"><div>Healthy-U</div></div>
        <div className="HamburgerMenu"><GiHamburgerMenu size="28" /></div>
    </div>
</div>

export default Header;