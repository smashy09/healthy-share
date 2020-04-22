import React from 'react';
import './resultcard.css';

const ResultCard = ({header, question1, question2, question3, backgroundColor}) => <div
style={{backgroundColor:backgroundColor}}
className="result_card"> 
    <div className="result_header">
        {header}
    </div>

    <div className="ResultCard1">
        <div className="card_question1">
            {question1}
        </div>
        <div className="card_answer1">
            
        </div>
    </div>
    <div className="ResultCard2">
        <div className="card_question2">
            {question2}
        </div>
        <div className="card_answer2">
            
        </div>
    </div>
    <div className="ResultCard3">
        <div className="card_question3">
            {question3}
        </div>
        <div className="card_answer3">
            
        </div>
    </div>

</div>


Card.defaultProps = {
    backgroundColor:"#EEE",
    header:"You chose",
    question1:"How much do you sit down a day?",
    question2:"How many calories do you eat per day?",
    question3:"How much sleep are you getting per day?"
}


export default ResultCard;