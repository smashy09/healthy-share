import React from 'react';
import './home.css';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';

//homePage
const img = require('./logo.png');
const HomePage = () => <div className="All_home_page">
    <CustomText fontSize={72} color="#867B8C" text="Healthy-U"/>
<img src={img} className="image"/>
<CustomText fontSize={32}  text="Become a better U today!"/>
<CustomButton text="Start" className="StartButton"/>
<CustomText fontSize={32} color="#867B8C" className="EndText" text="This app will give you the information you need to become a healthier U!"/>
</div>

HomePage.defaultProps = {
    img:img,
    onClick:()=>{}
}
export default HomePage;