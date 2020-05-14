import React from 'react';
import Animation from '../../comps/Animation';
import './animationpage1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

const animationtext= require('./text1.png'); 

function AnimationNext1(){
    Router.push("/AnimationPage2");
}

function Animationback(){
    Router.push("/InformationPage");
}

const AnimationPage1 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="Animation_header">
<CustomText fontSize={32} text="Tutorial"/>
</div>

<div className="Animation_container">
<CustomText fontSize={18} text="Healthy-U will provide you with healthy 
living results, the results will be evaluated
through a series of answered questions."/>
</div>

<div className="Animation_next">
<CustomButton text="Back" onClick={Animationback} />
 <CustomButton text="Next!" onClick={AnimationNext1} />
</div>
<div className="Animation_people">
<Animation />
</div>

<div className="Animation_text1">
<img src={animationtext} />
</div>
</div>


export default AnimationPage1;