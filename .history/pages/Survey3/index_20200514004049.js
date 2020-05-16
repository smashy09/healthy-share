import React from 'react';
import Card from '../../comps/Card';
import './survey3.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';
import {data, ChangeData} from '../../data';

function SurveyNext3(){
    Router.push("/ResultPage");
}

const Survey3 = ({}) => <div>
<Header />
{/* <HamburgerMenu /> */}

<div class="survey_container3">
<CustomText fontSize={32} text="Survey"/>
<Card header="Question #3" question="How much sleep do you get per day?" healthytxt="7+ Hours" balancedtxt="5-6 Hours" unhealthytxt="4- Hours" 
Option1 = {()=>{
    data.resultsleep = "4- Hours"
    ChangeData(data)
 }}
 
 Option2 = {()=>{
     data.resultsleep = "5-6 Hours"
     ChangeData(data)
 }}
 
 Option3 = {()=>{
     data.resultsleep = "7+ Hours"
     ChangeData(data)
 }}
/>
</div>

<div class="survey_next">
<CustomButton text="Next!" onClick={SurveyNext3} />
</div>

</div>


Survey3.defaultProps = {

}

export default Survey3;