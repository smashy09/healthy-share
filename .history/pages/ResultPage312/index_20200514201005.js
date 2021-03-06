import React, {useEffect} from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';
import Router from 'next/router';
import {data, ChangeData} from '../../data';

function GoHome(){
    Router.push("/HomePage");
}

// var index = 0;
// const results_arr = [
//     {
//         healthytxt:"1-2 Hours",
//         balancedtxt:"3-5 Hours",
//         unhealthytxt:"7+ Hours",
//         text:"abcde",
//         img:""
//     },
//     {
//         healthytxt:"2000 Cal",
//         balancedtxt:"3000 Cal",
//         unhealthytxt:"4000+ Cal"
//     },
//     {
//         healthytxt:"7+ Hours",
//         balancedtxt:"5-6 Hours",
//         unhealthytxt:"3-4 Hours"
//     }
// ]


const ResultPage = ({backgroundColor, margin}) => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".resultpage").style.left = 0;
        },50);
    },[]);

    return <div style={{backgroundColor}} className="resultpage" >
        <Header />
        <div style={{margin:margin, textAlign:"center"}}>
        <ResultCard answer1="1-2 Hours" answer2="1 Cup" answer3="4-"  />
        </div>
        <Results advice1="You are sitting a healthy amount! Great work, try improving your blood flow by doing cardio."

 advice2="Try implementing another cup of vegetables throughout your daily meals. Carrots make for a great snack!" advice3="Get at least 7 hours of sleep. Avoid consuming alcohol or caffeine before bedtime." result="You sit a healthy amount, have an average diet and sleep a decent amount. " />
        <ResultCard />
        </div>
        <Results />
        <div className="gohome_button">
            <CustomButton text="Start again!"  onClick={GoHome}/>
        </div>
    </div>
}

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE",
    margin:"20px 0"
}

export default ResultPage;