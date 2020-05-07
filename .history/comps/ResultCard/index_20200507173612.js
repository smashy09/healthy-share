import React from 'react';
import './resultcard.css';

const ResultCard = ({header, question1, question2, question3, answer1, answer2, answer3, backgroundColor}) => <div
className="result_card" style={{backgroundColor:backgroundColor}}> 
        <div className="result_header">
            {header}
        </div>
        <div className="ResultCardContainer">
            <div className="ResultCard">
                <div className="result" >
                    {question1}
                </div>
                <div className="card_answer">
                    {answer1}
                </div>
            </div>
            <div className="ResultCard" >
                <div style={{fontSize:"19px"}} className="result" >
                    {question2}
                </div>
                <div className="card_answer">
                    {answer2}
                </div>
            </div>
            <div className="ResultCard">
                <div className="result">
                    {question3}
                </div>
                <div className="card_answer">
                     {answer3}
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