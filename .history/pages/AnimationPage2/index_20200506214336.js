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
<CustomText fontSize={18} text="There will be three multiply choice questions
regarding your health state that needs to be
answered for you to then receive health results.
"/>
</div>

<div className="Animation_next">
 <CustomButton text="Next!" onClick={AnimationNext2} />
</div>
<div className="Animation_people">
<Animation />
</div>
</div>


export default AnimationPage2;