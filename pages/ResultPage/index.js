import React, {useEffect} from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';
import Router from 'next/router';
import {data, ChangeData, Sumup} from '../../data';

const couchpotatoImg = require('./couchpotato.svg');
const effortneededImg = require('./effortneeded.svg');
const healthypersonImg = require('./healthyperson.svg');




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


const ResultPage = ({backgroundColor, margin, effortneededImg}) => {
    console.log(data)
    Sumup()
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
        <Results type={data.type} result={data.result} image={data.image} />
        <div className="gohome_button">
            <CustomButton text="Start again!"  onClick={GoHome}/>
        </div>
    </div>
}
ResultPage.defaultProps = {
    couchpotatoImg:couchpotatoImg,
    effortneededImg: effortneededImg,
    healthypersonImg: healthypersonImg,
    backgroundColor:"#F3F2EE",
    margin:"20px 0"
}



export default ResultPage;