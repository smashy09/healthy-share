import React from 'react';
import './card.css';

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

const Card = ({header, question, backgroundColor, optionbackgroundColor, healthytxt, balancedtxt, unhealthytxt, healthyImg, balancedImg, unhealthyImg, onClick}) => <div
style={{backgroundColor:backgroundColor}}
className="survey_card"> 
    <div className="card_header">
        {header}
    </div>
    <div className="card_question">
        {question}
    </div>

    <div className="card_answers">
        <div className="options1" onClick={Option1} style={{backgroundColor:optionbackgroundColor}} >
            <img src={unhealthyImg} />
            {unhealthytxt} 
        </div>

        <div className="options2" style={{backgroundColor:optionbackgroundColor}} >
           <img src={balancedImg} onClick={Option2} />
            {balancedtxt}
         </div>

        <div className="options3" style={{backgroundColor:optionbackgroundColor}} >
           <img src={healthyImg} onClick={Option3} />
            {healthytxt} 
        </div>
    </div>

</div>

function Option1() {
    document.querySelector(".options1").style.backgroundColor = "grey"
    document.querySelector(".options2").style.backgroundColor = "orange"
    document.querySelector(".options3").style.backgroundColor = "orange"
    document.querySelector("#result_status1").innerText = result_state1.items[0].title;
}

function Option2() {
    document.querySelector(".options1").style.backgroundColor = "orange"
    document.querySelector(".options2").style.backgroundColor = "grey"
    document.querySelector(".options3").style.backgroundColor = "orange"
    document.querySelector("#result_status1").innerText = result_state1.items[1].title;
}

function Option3() {
    document.querySelector(".options1").style.backgroundColor = "orange"
    document.querySelector(".options2").style.backgroundColor = "orange"
    document.querySelector(".options3").style.backgroundColor = "grey"
    document.querySelector("#result_status1").innerText = result_state1.items[2].title;
}

Card.defaultProps = {
    backgroundColor:"lightblue",
    optionbackgroundColor:"orange",
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