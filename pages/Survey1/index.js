import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';


const Survey1 = ({}) => <div>
<Card />
<Header />
<CustomText fontSize={32} text="Survey"/>
{/* <HamburgerMenu /> */}
</div>

Survey1.defaultProps = {

}

export default Survey1;