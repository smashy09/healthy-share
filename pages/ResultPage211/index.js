import React, {useEffect} from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';
import Router from 'next/router';

function GoHome(){
    Router.push("/HomePage");
}

const ResultPage = ({backgroundColor, margin}) => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".resultpage").style.left = 0;
        },50);
    },[]);

    return <div style={{backgroundColor}} className="resultpage" >
        <Header />
        <div style={{margin:margin, textAlign:"center"}}>
        <ResultCard answer1="3-5 Hours" answer2="None" answer3="4- Hours"  />
        </div>
        <Results advice1="You sit a healthy amount, but to improve try scraping another hour of sitting away and do some cardio exercises" advice2="A minimum of 400g of fruit and veg should be eaten every day" advice3="Get at least 7 hours of sleep. Avoid consuming alcohol or caffeine before bedtime." result="You sit a healthy amount, however, you are not eating healthy enough and lack sleep. " />
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