import React from 'react';
import './card.css';

const Card = ({header, question, backgroundColor, healthytxt, balancedtxt, unhealthytxt}) => <div
style={{backgroundColor:backgroundColor}}
className="survey_card"> 
    <div class="card_header">
        {header}
    </div>
    <div class="card_question">
        {question}
    </div>

    <div class="card_answers">
        <div class="options">{healthytxt} </div>
        <div class="options">{balancedtxt} </div>
        <div class="options">{unhealthytxt} </div>
    </div>

</div>

Card.defaultProps = {
    header:"Question #1",
    question:"How much do you sit down a day?",
    healthytxt:"1-2 Hours",
    balancedtxt:"3-5 Hours",
    unhealthytxt:"7+ Hours"
}

export default Card;