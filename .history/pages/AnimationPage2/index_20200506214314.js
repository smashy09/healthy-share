import React from 'react';
import Animation from '../../comps/Animation';
import './AnimationPage2.css';
import Header from '../../comps/Header';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';
import Router from 'next/router';

function AnimationNext2(){
    Router.push("/survey1");
}

const AnimationPage2 = () => <div>
<Header />
{/* <HamburgerMenu /> */}

<div className="Animation_container">
<CustomText fontSize={18} text="Healthy-U will provide you with healthy 
living results, the results will be evaluated
through a series of answered questions."/>
</div>

<div className="Animation_next">
 <CustomButton text="Next!" onClick={AnimationNext2} />
</div>
<div className="Animation_people">
<Animation />
</div>
</div>


export default AnimationPage2;