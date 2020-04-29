import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import ResultCard from '../../comps/ResultCard';

const ResultPage = ({backgroundColor, margin}) => <div style={{backgroundColor}}>

    <div id="resultpage" >
        <Header />
        <div style={{margin:margin}}>
        <ResultCard />
        </div>
        
    </div>
</div>

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE",
    margin:"20px 0"
}

export default ResultPage;