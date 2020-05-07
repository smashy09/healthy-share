import React from 'react';
import Animation from '../../comps/Animation';
import './AnimationPage3.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

function AnimationNext3() {
    Router.push("/survey1");
}

function Animationback() {
    Router.push("/AnimationPage2");
}

const AnimationPage3 = () => <div>
    <Header />
    {/* <HamburgerMenu /> */}

    <div className="Animation_header">
        <CustomText fontSize={32} text="Tutorial" />
    </div>

    <div className="Animation_container">
        <CustomText fontSize={18} text="Once you finish answering the survey 
        questions you will then receive the information needed to help improve
         your healthy living lifestyle."/>
    </div>

    <div className="Animation_next3">
        <CustomButton text="Back" onClick={Animationback} />
        <CustomButton text="Start Survey!" onClick={AnimationNext3} />
    </div>
    <div className="Animation_people">
        <Animation />
    </div>
</div>


export default AnimationPage3;