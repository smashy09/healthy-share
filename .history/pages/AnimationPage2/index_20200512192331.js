import React from 'react';
import Animation from '../../comps/Animation';
import './animationpage2.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

const animationtext2= require('./text2.png'); 

function AnimationNext2(){
    Router.push("/AnimationPage3");
}

function Animationback(){
    Router.push("/AnimationPage1");
}

const AnimationPage2 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="Animation_header">
<CustomText fontSize={32} text="Tutorial"/>
</div>

<div className="Animation_container">
<CustomText fontSize={18} text="There will be three multiply choice questions
regarding your health state that needs to be
answered for you to then receive health results.
"/>
</div>

<div className="Animation_next1">
<CustomButton text="Back" onClick={Animationback} />
 <CustomButton text="Next!" onClick={AnimationNext2} />
</div>
<div className="Animation_people">
<Animation />
</div>

<div class="Animation_text2">
<img src={animationtext2} />
</div>
</div>


export default AnimationPage2;