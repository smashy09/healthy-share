import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';
import Router from 'next/router';

function GoHome(){
    Router.push("/HomePage");
}

const ResultPage = ({backgroundColor, margin}) => <div style={{backgroundColor}}>

    <div id="resultpage" >
        <Header />
        <div style={{margin:margin}}>
        <ResultCard />
        </div>
        <Results />
        <CustomButton text="Start again!"  onClick={GoHome}/>
    </div>
</div>

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE",
    margin:"20px 0"
}

export default ResultPage;