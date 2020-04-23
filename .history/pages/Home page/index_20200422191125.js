import React from 'react';
import './home.css';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';

//madec the UI
const img = require('./logo.png');
const HomePage = () => <div className="All_home_page">
    <CustomText fontSize={72} color="#DEEDEC" text="Healthy-U"/>
<img src={img} className="image"/>
<CustomText fontSize={32}  text="Become a better U today!"/>
<CustomButton text="Start"/>
<CustomText fontSize={32} color="#DEEDEC" text="The app that helps with your health."/>
</div>

HomePage.defaultProps = {
    img:img,
    onClick:()=>{}
}
export default HomePage;