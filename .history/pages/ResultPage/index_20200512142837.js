import React, {useEffect} from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';
import Router from 'next/router';
import {data, ChangeData} from '../../pages/data';

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

var item_state = {
  qnum: 0,
  items: [
    {
      title: "New Cell Phone",
      Status_true: "You've added New Cell Phone.",
      Status_false: "You've removed New Cell Phone.",
      num: 0
    },
    {
      title: "Toilet Paper",
      Status_true: "You've added Toilet Paper.",
      Status_false: "You've removed Toilet paper.",
      num: 0
    },
    {
      title: "Grocer Package",
      Status_true: "You've added Grocer Package.",
      Status_false: "You've removed Grocer Package.",
      num: 0
    }
  ]
};

const ResultPage = ({backgroundColor, margin}) => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".resultpage").style.left = 0;
        },50);
    },[]);

    return <div style={{backgroundColor}} className="resultpage" >
        <Header />
        <div style={{margin:margin, textAlign:"center"}}>
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