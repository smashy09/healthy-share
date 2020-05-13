import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';
import {data, ChangeData} from '../../pages/data';

function SurveyNext1(){
    Router.push("/Survey2");
}

const Survey1 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container">
<CustomText fontSize={32} text="Survey"/>
<Card Option1 = {()=>{
   data.resultsit = "Testing"
   ChangeData(data) 
}} />
</div>

<div className="survey_next">
 <CustomButton text="Next!" onClick={SurveyNext1} />
</div>

</div>


export default Survey1;