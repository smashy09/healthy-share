import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';


const Survey1 = ({backgroundColor}) => <div 
style={{backgroundColor}}
>
<Header />
{/* <HamburgerMenu /> */}

<div class="survey_container">
<CustomText fontSize={32} text="Survey"/>
<Card />
</div>

<div class="survey_next">
<CustomButton/>
</div>

</div>


Survey1.defaultProps = {
    backgroundColor:"#F3F2EE"
}

export default Survey1;