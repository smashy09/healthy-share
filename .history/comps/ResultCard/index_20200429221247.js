import React from 'react';
import './resultcard.css';

const ResultCard = ({header, question1, question2, question3, answer1, answer2, answer3, backgroundColor}) => <div
className="result_card" style={{backgroundColor:backgroundColor}}> 
        <div className="result_header">
            {header}
        </div>
        <div className="ResultCardContainer">
            <div className="ResultCard">
                <div className="card_question" id="card_question1">
                    {question1}
                </div>
                <div className="card_answer1">
                    {answer1}
                </div>
            </div>
            <div className="ResultCard" >
                <div className="card_question" id="card_question2">
                    {question2}
                </div>
                <div className="card_answer2">
                    {answer2}
                </div>
            </div>
            <div className="ResultCard">
                <div className="card_question" id="card_question3">
                    {question3}
                </div>
                <div className="card_answer3">
                     {answer3}
                </div>
            </div>
        </div>
    </div>



ResultCard.defaultProps = {
    backgroundColor:"#EEE",
    header:"You chose",
    question1:"How much do you sit down a day?",
    question2:"How many calories do you eat per day?",
    question3:"How much sleep are you getting per day?",
    answer1:"1-2 Hours",
    answer2:"3-5 Hours",
    answer3:"7+ Hours",
}


export default ResultCard;