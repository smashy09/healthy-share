import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.png');

const Results = ({couchpotatoImg, result, solution}) => <div className="results">
    <div className="resultImg">
    <img src={couchpotatoImg} />
    </div>
    <div className="resultText">
        {result}
        <p />
    </div>

    <div className="solution">
        {solution}
    </div>
</div>


Results.defaultProps = {
    couchpotatoImg:couchpotatoImg,
    result:"You are leading a sort of potato couch lifestyle. <br> Seems like you sit and eat too much and lack of sleep.",
    solution:"What you need right now is:",
}

export default Results;