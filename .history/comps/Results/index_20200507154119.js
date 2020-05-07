import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.svg');
const workoutImg = require('./workout.svg');
const lesscaloriesImg = require('./veggies.svg');
const sleepImg = require('./sleep.svg');

const Results = ({type, couchpotatoImg, result, solution}) => <div className="results">
    Your type: {type}
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
        <img src={workoutImg} /> try three days of strength training, two days of cardio, and two days of active rest. 
        <img src={lesscaloriesImg} />
        <img src={sleepImg} />
    </div>
</div>


Results.defaultProps = {
    type:"Couch Potato",
    couchpotatoImg:couchpotatoImg,
    workoutImg:workoutImg,
    lesscaloriesImg:lesscaloriesImg,
    sleepImg:sleepImg,
    result:"You are leading a sort of couch potato lifestyle. Seems like you sit, eat too much and lack of sleep.",
    solution:"What you need right now is:",
    
}

export default Results;