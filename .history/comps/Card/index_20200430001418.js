import React from 'react';
import './card.css';

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

const Card = ({header, question, backgroundColor, healthytxt, balancedtxt, unhealthytxt, healthyImg, balancedImg, unhealthyImg, onClick}) => <div
style={{backgroundColor:backgroundColor}}
className="survey_card"> 
    <div className="card_header">
        {header}
    </div>
    <div className="card_question">
        {question}
    </div>

    <div className="card_answers">
        <div className="options" onClick={AnswerClick}>
            <img src={healthyImg} />
            {healthytxt} 
        </div>

        <div className="options" onClick={AnswerClick}>
           <img src={balancedImg} />
            {balancedtxt}
         </div>

        <div className="options" onClick={AnswerClick}>
           <img src={unhealthyImg} />
            {unhealthytxt} 
        </div>
    </div>

</div>

function AnswerClick() {
    alert("hi")
}

Card.defaultProps = {
    backgroundColor:"white",
    header:"Question #1",
    question:"How much do you sit down a day?",
    healthytxt:"1-2 Hours",
    balancedtxt:"3-5 Hours",
    unhealthytxt:"7+ Hours",
    healthyImg:healthyImg,
    balancedImg:balancedImg,
    unhealthyImg:unhealthyImg,
    onClick:AnswerClick
}

export default Card;