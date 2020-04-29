import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import ResultCard from '../../comps/ResultCard';

const ResultPage = ({backgroundColor, margin}) => <div style={{backgroundColor}}>

    <div id="resultpage" >
        <Header />
        <ResultCard style={{margin:margin}}/>
        <div id="sitting_result"></div>
        <div id="calorie_result"></div>
        <div id="sleep_result"></div>
    </div>
</div>

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE",
    margin:"20px"
}

export default ResultPage;