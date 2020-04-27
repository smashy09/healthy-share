import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';


const Survey1 = ({}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container">
<CustomText fontSize={32} text="Survey"/>
<Card />
</div>

<div className="survey_next">
<CustomButton text="Next!" id="hi" />

</div>

</div>


Survey1.defaultProps = {
   
}

export default Survey1;