import React from 'react';
import Card from '../../comps/Card';
import './survey2.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';
import {data, ChangeData} from '../../data';

function SurveyNext2(){
    Router.push("/Survey3");
}

const Survey2 = ({}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container2">
<CustomText fontSize={32} text="Survey"/>
<Card header="Question #2" question="How many vegetables do you eat per day?" healthytxt="2+ Cups" balancedtxt="1 Cup" unhealthytxt="None" 
Option1 = {()=>{
    data.resulteat = "None"
    ChangeData(data)
 }}
 
 Option2 = {()=>{
     data.resulteat = "1 Cup"
     ChangeData(data)
 }}
 
 Option3 = {()=>{
     data.resulteat = "2+ Cups"
     ChangeData(data)
 }}
/>
</div>

<div className="survey_next">
<CustomButton text="Next!" onClick={SurveyNext2} />
</div>

</div>


Survey2.defaultProps = {
    
}

export default Survey2;