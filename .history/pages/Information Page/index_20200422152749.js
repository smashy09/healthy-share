import React from 'react';
import './info.css';
import Header from '../../comps/Header';
import HamburgerMenu from '../../comps/HamburgerMenu';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';

//madec the UI

const InformationPage = () => <div className="All_info_page">
    <CustomText fontSize={32} text="Information about the app"/>
    <CustomText fontSize={32} text="Health-U is a survey based app where you 
answer a few simple multiply choice questions,
then receive information such as how unhealthy
/healthy you are, a description of body health at
the rate you are at, and a solutions to help with
your results if necessary."/>
 <CustomText fontSize={32} text="Benefits"/>
 <CustomText fontSize={32} text="Benefits of our mobile healthy-U app include
getting information answered from the survey 
about your health status right now and how to
change it/overcome the challenges you may have
while doing so. This app is not meant to just
show you how unhealthy you are, it’s meant to 
help you become a better U."/>
</div>

InformationPage.defaultProps = {
    place:"New Button",
    color:"#000",
    onClick:()=>{}
}
export default InformationPage;