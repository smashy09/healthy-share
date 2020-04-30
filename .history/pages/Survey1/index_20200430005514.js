import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';


const Survey1 = ({}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container">
<CustomText fontSize={32} text="Survey"/>
<Card />
</div>

<div className="survey_next">
<CustomButton text="Next!" />
</div>

</div>


Survey1.defaultProps = {

}

export default Survey1;