import React from 'react';
import Card from '../../comps/Card';
import './survey2.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';


const Survey2 = ({}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div class="survey_container">
<CustomText fontSize={32} text="Survey"/>
<Card header="Question #2" question="How many calories do you eat per day?" healthytxt="2000 Cal" balancedtxt="3000 Cal" unhealthytxt="4000+ Cal" />
</div>

<div class="survey_next">
<CustomButton text="Next!" />
</div>

</div>


Survey2.defaultProps = {

}

export default Survey2;