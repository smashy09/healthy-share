import React from 'react';
import './card.css';

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

const Card = ({header, question, backgroundColor, healthytxt, balancedtxt, unhealthytxt, healthyImg, balancedImg, unhealthyImg, onClick}) => <div
style={{backgroundColor:backgroundColor}}
className="survey_card"> 
    <div class="card_header">
        {header}
    </div>

    
    <div class="card_question">
        {question}
    </div>

    <div class="card_answers">
        <div class="options" onClick={AnswerClick}>
            <img src={healthyImg} />
            {healthytxt} 
        </div>

        <div class="options" onClick={AnswerClick}>
           <img src={balancedImg} />
            {balancedtxt}
         </div>

        <div class="options" onClick={AnswerClick}>
           <img src={unhealthyImg} />
            {unhealthytxt} 
        </div>
    </div>

</div>

const ResultCard = ({}) => <div style={{}}>
    <div class="card_header">
     
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

ResultCard.defaultProps = {
    backgroundColor:"#EEE",
    header:"You chose",
    
}

export default Card;