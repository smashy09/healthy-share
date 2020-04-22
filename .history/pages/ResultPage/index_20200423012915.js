import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import ResultCard from '../../comps/ResultCard';

const ResultPage = ({backgroundColor}) => <div style={{backgroundColor}}>

    <div id="resultpage">
        <Header />
        <p />
        <ResultCard />
        <div id="sitting_result"></div>
        <div id="calorie_result"></div>
        <div id="sleep_result"></div>
    </div>
</div>

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE"
}

export default ResultPage;