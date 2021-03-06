import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';
import {data, ChangeData} from '../../data';

function SurveyNext1(){
    Router.push("/Survey2");
}

const Survey1 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container">
<CustomText fontSize={32} text="Survey"/>
<Card Option1 = {()=>{
   data.resultsit = "7+ Hours"
   data.advicesit = "You sit an unhealthy amount, decreasing the amount of time you sit will improve your mental health and reduce the risk of health problems like diabetes"
   ChangeData(data)
}}

Option2 = {()=>{
    data.resultsit = "3-5 Hours"
    data.advicesit = "You sit a decent amount, but to improve try scraping another hour of sitting away and do some cardio exercises"
    ChangeData(data)
}}

Option3 = {()=>{
    data.resultsit = "1-2 Hours"
    data.advicesit = "You are sitting a healthy amount! Great work, try improving your blood flow by doing cardio."
    ChangeData(data)  
}}

/>
</div>

<div className="survey_next">
 <CustomButton text="Next!" onClick={SurveyNext1} />
</div>

</div>


export default Survey1;