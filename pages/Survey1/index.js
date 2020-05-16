import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';
import {data, ChangeData, Sumup} from '../../data';


const goodsit = require('./goodsit.png');
const balancedsit = require('./balancedsit.png');
const badsit = require('./badsit.png');

function ButtonSlide(){
    document.querySelector(".survey_next").style.right = "-70%";
}

function SurveyNext1(){
    Router.push("/Survey2");
}

const Survey1 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container" onClick={ButtonSlide} >
<CustomText fontSize={32} text="Survey"/>
<Card 

unhealthyImg={badsit}
balancedImg={balancedsit}
healthyImg={goodsit}

Option1 = {()=>{
   document.querySelector(".options1").style.backgroundColor = "grey"
   document.querySelector(".options2").style.backgroundColor = "#F4F2DD"
   document.querySelector(".options3").style.backgroundColor = "#F4F2DD"
   data.resultsit = "7+ Hours"
   data.advicesit = "You sit an unhealthy amount, decreasing the amount of time you sit will improve your mental health and reduce the risk of health problems like diabetes"
   ChangeData(data)

}}

Option2 = {()=>{
    document.querySelector(".options1").style.backgroundColor = "#F4F2DD"
    document.querySelector(".options2").style.backgroundColor = "grey"
    document.querySelector(".options3").style.backgroundColor = "#F4F2DD"
    data.resultsit = "3-5 Hours"
    data.advicesit = "You sit a decent amount, but to improve try scraping another hour of sitting away and do some cardio exercises"
    ChangeData(data)

}}

Option3 = {()=>{
    document.querySelector(".options1").style.backgroundColor = "#F4F2DD"
    document.querySelector(".options2").style.backgroundColor = "#F4F2DD"
    document.querySelector(".options3").style.backgroundColor = "grey"
    data.resultsit = "1-2 Hours"
    data.advicesit = "You are sitting a healthy amount! Great work, try improving your blood flow by doing cardio."
    ChangeData(data)  

}}

/>
</div>

<div className="survey_next">
 <CustomButton className="surveybutton" text="Next!" onClick={SurveyNext1} />
</div>

</div>


Survey1.defaultProps = {
    badsit:badsit,
    balancedsit:balancedsit,
    goodsit:goodsit,
}

export default Survey1;