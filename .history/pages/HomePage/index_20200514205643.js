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
    <div className="Home_title">
    <CustomText fontSize={72} color="#8DB580" text="Healthy-U"/>
    </div>
<img src={img} className="image"/>
<CustomText fontSize={32}  text="Become a better U today!"/>
<div className="start_button">
<CustomButton text="Start App!"  onClick={NextPage}/>
</div>
<div className="name_para">
<CustomText fontSize={22} color="#7E8987" text="This app will give you the information you need to become a healthier U!"/>
</div>
</div>
</div>

HomePage.defaultProps = {
    img:img
}
export default HomePage;