import React from 'react';
import Card from '../../comps/Card';
import './survey1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';


const goodsit = require('./goodsit.png');
const balancedsit = require('./balancedsit.png');
const badsit = require('./badsit.png');

function ButtonSlide(){
    document.querySelector(".survey_next").style.left = 0;
}

function SurveyNext1(){
    Router.push("/Survey2");
}

const Survey1 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="survey_container" onClick={ButtonSlide} >
<CustomText fontSize={32} text="Survey"/>
<Card unhealthyImg={badsit} balancedImg={balancedsit} healthyImg={goodsit} />
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