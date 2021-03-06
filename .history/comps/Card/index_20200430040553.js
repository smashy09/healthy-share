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
        <div className="options1" onClick={Option1 }>
            <img src={healthyImg} />
            {healthytxt} 
        </div>

        <div className="options2" >
           <img src={balancedImg} onClick={Option2} />
            {balancedtxt}
         </div>

        <div className="options3" >
           <img src={unhealthyImg} onClick={Option3} />
            {unhealthytxt} 
        </div>
    </div>

</div>

function Option1() {
    document.querySelector(".options1").style.backgroundColor = "grey"
    document.querySelector(".options2").style.backgroundColor = "initial"
    document.querySelector(".options3").style.backgroundColor = "initial"
}

function Option2() {
    document.querySelector(".options1").style.backgroundColor = "initial"
    document.querySelector(".options2").style.backgroundColor = "grey"
    document.querySelector(".options3").style.backgroundColor = "initial"
}

function Option3() {
    document.querySelector(".options1").style.backgroundColor = "initial"
    document.querySelector(".options2").style.backgroundColor = "initial"
    document.querySelector(".options3").style.backgroundColor = "grey"
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
    onClick:Option1,
    onClick:Option2,
    onClick:Option3
}

export default Card;