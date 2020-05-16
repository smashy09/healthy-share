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


console.log(data)

function GoHome(){
    Router.push("/HomePage");
}

const ResultPage = ({backgroundColor, margin, effortneededImg}) => {
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
        <Results type={data.type} result={data.result} />
        <div className="gohome_button">
            <CustomButton text="Start again!"  onClick={GoHome}/>
        </div>
    </div>
}
ResultPage.defaultProps = {
    couchpotatoImg:couchpotatoImg,
    effortneededImg: effortneededImg,
    healthypersonImg: healthypersonImg,
    margin:"20px 0"
}



export default ResultPage;