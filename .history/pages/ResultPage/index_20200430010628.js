import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';

const ResultPage = ({backgroundColor, margin, textAlign}) => <div style={{backgroundColor}}>

    <div id="resultpage" >
        <Header />
        <div style={{margin:margin}}>
        <ResultCard />
        </div>
        <Results style={{textAlign:{textAlign}}} />
    </div>
</div>

ResultPage.defaultProps = {
    backgroundColor:"#F3F2EE",
    margin:"20px 0", 
    textAlign: "center"
}

export default ResultPage;