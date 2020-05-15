import React from 'react';
import './results.css';
import {data, ChangeData} from '../../data';

const couchpotatoImg = require('./couchpotato.svg');
const workoutImg = require('./workout.svg');
const lesscaloriesImg = require('./veggies.svg');
const sleepImg = require('./sleep.svg');

const Results = ({type, couchpotatoImg, result, advice1, advice2, advice3}) => <div className="results">
    Your type: <span style={{fontSize:"20px",fontWeight:"bold"}}>{type}</span>
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
                {data.advicesit}
            </div>
        </div>
        <div className="solution_box">
            <img src={lesscaloriesImg} />
            <div className="solution_text" >
                {data.adviceeat}
            </div>
        </div>
        <div className="solution_box">
            <img src={sleepImg} />
            <div className="solution_text">
                {data.advicesleep}
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
    advice1:"Try three days of strength training, two days of cardio, and two days of active rest.",
    advice2:"A minimum of 400g of fruit and veg should be eaten every day",
    advice3:"Get at least 7 hours of sleep. Avoid consuming alcohol or caffeine before bedtime.",
    result:"Seems like you sit, eat too much and lack of sleep."
}

export default Results;