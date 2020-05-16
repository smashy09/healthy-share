import Router from 'next/router';
import React from 'react';
import './home.css';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';



function NextPage(){
    Router.push("/InformationPage");
}
//homePage
const img = require('./logo.png');
const HomePage = () => <div>
<div id="All_home_page">
    <CustomText fontSize={72} color="#FFDECD" text="Healthy-U"/>
<img src={img} className="image"/>
<CustomText fontSize={32}  text="Become a better U today!"/>
<div className="start_button">
<CustomButton text="Start App!"  onClick={NextPage}/>
</div>
<CustomText fontSize={22} color="#FFDECD" text="This app will give you the information you need to become a healthier U!"/>
</div>
</div>

HomePage.defaultProps = {
    img:img
}
export default HomePage;