import React from 'react';
import Card from '../../comps/Card';
import './survey3.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';
import {data, ChangeData} from '../../data';

function ButtonSlide(){
    document.querySelector(".survey_next").style.right = "-70%";
}



const healthysleep = require('./goodsleep.png');
const balancedsleep = require('./balancedsleep.png');
const badsleep = require('./badsleep.png');

function SurveyNext3(){
    Router.push("/ResultPage");
}

const Survey3 = ({healthysleep}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div class="survey_container3" onClick={ButtonSlide}>
<CustomText fontSize={32} text="Survey"/>
<Card header="Question #3" question="How much sleep do you get per day?" healthytxt="7+ Hours" balancedtxt="5-6 Hours" unhealthytxt="4- Hours" 
Option1 = {()=>{
    document.querySelector(".options1").style.backgroundColor = "grey"
    data.resultsleep = "4- Hours"
    data.advicesleep = "Get at least 7 hours of sleep. Avoid consuming alcohol or caffeine before bedtime."
    ChangeData(data)
 }}
 
 Option2 = {()=>{
    document.querySelector(".options2").style.backgroundColor = "grey"
     data.resultsleep = "5-6 Hours"
     data.advicesleep = "Try getting a couple more hours of sleep, you'll feel more energized during the day."
     ChangeData(data)
 }}
 
 Option3 = {()=>{
     document.querySelector(".options3").style.backgroundColor = "grey"
     data.resultsleep = "7+ Hours"
     data.advicesleep = "You are getting a good amount of sleep! Keep within 7-10 hours to stay healthy."
     ChangeData(data)
 }}
/>
</div>

<div class="survey_next">
<CustomButton text="Next!" onClick={SurveyNext3} />
</div>

</div>


Survey3.defaultProps = {
healthysleep:healthysleep,
balancedsleep:balancedsleep,
badsleep:badsleep
}

export default Survey3;