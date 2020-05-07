import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.svg');
const workoutImg = require('./workout.svg');
const lesscaloriesImg = require('./veggies.svg');
const sleepImg = require('./sleep.svg');

const Results = ({type, couchpotatoImg, result, solution}) => <div className="results">
    <div>Your type: {type}</div>
    <div className="resultImg">
        <img src={couchpotatoImg} />
    </div>
    <div className="resultText">
        {result}
    </div>

    <div className="solution">
        <div className="solution_box">
            <img src={workoutImg} /> 
            <div className="solution_text">
            Try three days of strength training, two days of cardio, and two days of active rest.
            </div>
        </div>
        <div className="solution_box">
            <img src={lesscaloriesImg} />
            <div className="solution_text">
            a minimum of 400g of fruit and veg should be eaten every day
            </div>
        </div>
        <div className="solution_box">
            <img src={sleepImg} />
            <div className="solution_text">
            Try three days of strength training, two days of cardio, and two days of active rest.
            </div>
        </div>
    </div>
</div>


Results.defaultProps = {
    type:"Couch Potato",
    couchpotatoImg:couchpotatoImg,
    workoutImg:workoutImg,
    lesscaloriesImg:lesscaloriesImg,
    sleepImg:sleepImg,
    result:"Seems like you sit, eat too much and lack of sleep.",
    solution:"What you need right now is:"
}

export default Results;