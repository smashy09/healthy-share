import React, {useState} from 'react';
import './card.css';
import Router from 'next/router';

var result_state1 = {
    qnum: 0,
    items: [
      {
        title: "6+ Hours",
        advice: "You sit an unhealthy amount, decreasing the amount of time you sit will improve your mental health and reduce the risk of health problems like diabetes",
        num: 3
      },
      {
        title: "3-5 hours",
        advice: "You sit a decent amount, but to improve try scraping another hour of sitting away and do some cardio exercises",
        num: 2
      },
      {
        title: "1-2hours",
        advice: "You are sitting a healthy amount! Great work, try improving your blood flow by doing cardio.",
        num: 1
      }
    ]
  };

  var result_state2 = {
    qnum: 0,
    items: [
      {
        title: "None",
        advice: "A minimum of 400g of fruit and veg should be eaten every day",
        num: 1
      },
      {
        title: "1 cup",
        advice: "Try implementing another cup of vegetables throughout your daily meals. Carrots make for a great snack!",
        num: 2
      },
      {
        title: "2+ cups",
        advice: "You have a great diet! Just make sure you add some protein and other nutritional foods as well!",
        num: 3
      }
    ]
  };

  var result_state3 = {
    qnum: 0,
    items: [
      {
        title: "4- Hours",
        advice: "Get at least 7 hours of sleep. Avoid consuming alcohol or caffeine before bedtime.",
        num: 1
      },
      {
        title: "5-6 Hours",
        advice: "Try getting a couple more hours of sleep, you'll feel more energized during the day.",
        num: 2
      },
      {
        title: "7+ hours",
        advice: "You are getting a good amount of sleep! Keep within 7-10 hours to stay healthy.",
        num: 3
      }
    ]
  };

const healthyImg = require('./healthyicon.png');
const balancedImg = require('./balancedicon.png');
const unhealthyImg = require('./unhealthyicon.png');

const Card = ({Option1, Option2, Option3, header, question, backgroundColor, optionbackgroundColor, healthytxt, balancedtxt, unhealthytxt, healthyImg, balancedImg, unhealthyImg, onClick}) => <div
style={{backgroundColor:backgroundColor, }}
className="survey_card"> 
    <div className="card_header">
        {header}
    </div>
    <div className="card_question">
        {question}
    </div>

    <div className="card_answers">
        <div className="options1" onClick={Option1} style={{backgroundColor:data.active}} >
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


// function Option1() {
//     document.querySelector(".options1").style.backgroundColor = "grey"
//     document.querySelector(".options2").style.backgroundColor = "orange"
//     document.querySelector(".options3").style.backgroundColor = "orange"
//     document.querySelector("#result_status1").innerText = result_state1.items[0].title;
//     console.log(result_state1.items[0].title);
// } 

// function Option2() {
//     document.querySelector(".options1").style.backgroundColor = "orange"
//     document.querySelector(".options2").style.backgroundColor = "grey"
//     document.querySelector(".options3").style.backgroundColor = "orange"
// }

// function Option3() {
//     document.querySelector(".options1").style.backgroundColor = "orange"
//     document.querySelector(".options2").style.backgroundColor = "orange"
//     document.querySelector(".options3").style.backgroundColor = "grey"
// }

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