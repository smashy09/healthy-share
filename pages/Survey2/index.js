import React from 'react';
import Card from '../../comps/Card';
import './survey2.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

function ButtonSlide(){
    document.querySelector(".survey_next").style.right = "-70%";
}



function SurveyNext2(){
    Router.push("/Survey3");
}

const Survey2 = ({}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container2" onClick={ButtonSlide} >
<CustomText fontSize={32} text="Survey"/>
<Card header="Question #2" question="How many vegetables do you eat per day?" healthytxt="2+ Cups" balancedtxt="1 Cup" unhealthytxt="None" />
</div>

<div className="survey_next">
<CustomButton text="Next!" onClick={SurveyNext2} />
</div>

</div>


Survey2.defaultProps = {

}

export default Survey2;