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
        <ResultCard answer1="3-5 Hours" answer2="1 cup" answer3="5-6 Hours"  />
        </div>
        <Results advice1="You sit a decent amount, but to improve try scraping another hour of sitting away and do some cardio exercises" advice2="Try implementing another cup of vegetables throughout your daily meals. Carrots make for a great snack!" advice3="Try getting a couple more hours of sleep, you'll feel more energized during the day." result="You sit a decent amount, eat a decent amount of vegetables, and get a decent amount of sleep. Pretty average, could improve." />
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