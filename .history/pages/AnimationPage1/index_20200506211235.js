import React from 'react';
import Animation from '../../comps/Animation';
import './AnimationPage1.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

function AnimationNext1(){
    Router.push("/survey1");
}

const AnimationPage1 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="Animation_container">
<CustomText fontSize={18} text="Healthy-U will provide you with healthy 
living results, the results will be evaluated
through a series of answered questions."/>
</div>

<div className="Animation_next">
 <CustomButton text="Next!" onClick={AnimationNext1} />
</div>
<Animation />
</div>


export default AnimationPage1;