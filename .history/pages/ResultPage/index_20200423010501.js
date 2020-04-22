import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import ResultCard from '../../comps/ResultCard';

const ResultPage = ({}) => <div>
    <Header />
    <p />
    <ResultCard />
    <div id="sitting_result"></div>
    <div id="calorie_result"></div>
    <div id="sleep_result"></div>
</div>

ResultPage.defaultProps = {
    
}

export default ResultPage;