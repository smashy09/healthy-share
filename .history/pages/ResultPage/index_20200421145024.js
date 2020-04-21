import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';

const ResultPage = ({}) => <div>
    <Header />
    <div id="sitting_result"></div>
    <div id="calorie_result"></div>
    <div id="sleep_result"></div>
</div>

ResultPage.defaultProps = {
    
}

export default ResultPage;