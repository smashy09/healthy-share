import React from 'react';
import Card from '../../comps/Card';
import './survey3.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

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
<CustomText fontSize={32} text="Survey" />
<Card healthyImg={healthysleep} balancedImg={balancedsleep} unhealthyImg={badsleep} header="Question #3" question="How much sleep do you get per day?" healthytxt="7+ Hours" balancedtxt="5-6 Hours" unhealthytxt="4- Hours" />
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