import React from 'react';
import './home.css';
import CustomText from '../../comps/CustomText';
import CustomButton from '../../comps/CustomButton';


function NextPage(){

    document.querySelector("#All_home_page");
    setTimeout(function(){
        Router.push("/");
    },1000)
}
//homePage
const img = require('./logo.png');
const HomePage= () =>{

    useEffect(() =>{
        setTimeout(() =>{
    document.querySelector('#All_home_page').style.right = 0;
        },50)
    }, []);
    
return <div id="All_home_page">
    <CustomText fontSize={72} color="#867B8C" text="Healthy-U"/>
<img src={img} className="image"/>
<CustomText fontSize={32}  text="Become a better U today!"/>
<div className="start_button">
<CustomButton text="Start App!" onClick={NextPage}/>
</div>
<CustomText fontSize={22} color="#867B8C" text="This app will give you the information you need to become a healthier U!"/>
</div>
}

HomePage.defaultProps = {
    img:img,
    onClick:()=>{}
}
export default HomePage;