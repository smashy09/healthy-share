import React from 'react';
import './info.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';
import Card from '../../comps/Card';

//madec the UI

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

const InformationPage = () => <div className="All_info_page">
    <Header/>
    <CustomText fontSize={32} text="Welcome to Healthy-U!"/>
    <CustomText fontSize={32} text="Health-U goal is to help you be more aware of
your lifestyle by gathering information based on
your answers for the survey!"/>
 <CustomText fontSize={32} text="How to Use!"/>
 <CustomText fontSize={32} text="Whenever you're ready just click start survey.
There will be 3 questions
Pick the answer that represents you the closest."/>
  <div class="card_answers">
        <div class="options">
            <img src={healthyImg} />
            {healthytxt} 
        </div>

        <div class="options">
           <img src={balancedImg} />
            {balancedtxt}
         </div>

        <div class="options">
           <img src={unhealthyImg} />
            {unhealthytxt} 
        </div>
    </div>
<CustomText fontSize={32} text="Aer answering you will be given results
filled with info on how to become a better U! "/>
</div>

InformationPage.defaultProps = {
    place:"New Button",
    color:"#000",
    onClick:()=>{}
}
export default InformationPage;