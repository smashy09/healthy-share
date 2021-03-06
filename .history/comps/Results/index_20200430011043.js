import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.png');
const workoutImg = require('./workout.png');
const lesscaloriesImg = require('./lesscalories.png');
const sleepImg = require('./sleep.png');

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
        <p />
        <img src={workoutImg} />
        <img src={lesscaloriesImg} />
        <img src={sleepImg} />
    </div>
</div>


Results.defaultProps = {
    couchpotatoImg:couchpotatoImg,
    workoutImg:workoutImg,
    lesscaloriesImg:lesscaloriesImg,
    sleepImg:sleepImg,
    result:"You are leading a sort of potato couch lifestyle. Seems like you sit, eat too much and lack of sleep.",
    solution:"What you need right now is:",
    
}

export default Results;