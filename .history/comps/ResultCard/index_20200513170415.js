import React from "react";
import './resultcard.css';
import {data} from 'data.js';

var result_state1 = {
    qnum: 0,
    items: [
      {
        title: "7+ Hours",
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


const ResultCard = ({header, question1, question2, question3, answer1, answer2, answer3, backgroundColor}) => <div
className="result_card" style={{backgroundColor:backgroundColor}}> 
        <div className="result_header">
            {header}
        </div>
        <div className="ResultCardContainer">
            <div className="ResultCard">
                <div style={{fontSize:"19px"}} className="result" >
                    {question1}
                </div>
                <div style={{fontSize:"21px"}} className="card_answer">
                {data.resultsit}
                    <div className="result_status1"></div>
                </div>
            </div>
            <div className="ResultCard" >
                <div style={{fontSize:"19px"}} className="result" >
                    {question2}
                </div>
                <div style={{fontSize:"21px"}} className="card_answer">

                    <div id="result_status2">{answer2}</div>
                </div>
            </div>
            <div className="ResultCard">
                <div style={{fontSize:"19px"}} className="result">
                    {question3}
                </div>
                <div style={{fontSize:"21px"}} className="card_answer">
                     {answer3}
                     <div id="result_status2">{answer3}</div>
                </div>
            </div>
        </div>
    </div>




ResultCard.defaultProps = {
    backgroundColor:"#FFDECD",
    header:"You chose",
    question1:"You sit:",
    question2:"You eat:",
    question3:"You sleep:",
    answer1:"7+ Hours",
    answer2:"1cup",
    answer3:"3-4 Hours",
}


export default ResultCard;