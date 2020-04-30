import React from 'react';
import './info.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';

//Info Page

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

function NextPage(){

    document.querySelector("#All_home_page");
    setTimeout(function(){
        Router.push("/InformationPage");
    },1000)
}
//homePage
const InformationPage = ({backgroundColor, healthytxt, balancedtxt, unhealthytxt, healthyImg, balancedImg, unhealthyImg}) => <div
style={{backgroundColor:backgroundColor}}

  className="All_info_page">
    <Header/>
    <CustomText fontSize={32}  text="Welcome to Healthy-U!"/>
    <CustomText fontSize={22}  text="Health-U goal is to help you be more aware of
your lifestyle by gathering information based on
your answers for the survey!"/>
 <CustomText fontSize={32} text="How to Use!"/>
 <CustomText fontSize={22} text="Whenever you're ready just click start survey.
There will be 3 questions
Pick the answer that represents you the closest."/>
  <div className="card_answers">
        <div className="options">
            <img src={healthyImg} />
            {healthytxt} 
        </div>

        <div className="options">
           <img src={balancedImg} />
            {balancedtxt}
         </div>

        <div className="options">
           <img src={unhealthyImg} />
            {unhealthytxt} 
        </div>
    </div>
<CustomText fontSize={22} text="After answering you will be given results
filled with info on how to become a better U! "/>
<div className="info_button">
<CustomButton className="R_button"  onClick={NextPage}/>
</div>
</div>

InformationPage.defaultProps = {
    place:"New Button",
    color:"#000",
    healthytxt:"healthy",
    balancedtxt:"balanced",
    unhealthytxt:"unhealthy",
    healthyImg:healthyImg,
    balancedImg:balancedImg,
    unhealthyImg:unhealthyImg,
}
export default InformationPage;