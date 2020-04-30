import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';

const ResultPage = ({backgroundColor, margin}) => <div style={{backgroundColor}}>

    <div id="resultpage" >
        <Header />
        <div style={{margin:margin}}>
        Your type:
        <ResultCard />
        </div>
        <Results />
    </div>
</div>

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE",
    margin:"20px 0"
}

export default ResultPage;