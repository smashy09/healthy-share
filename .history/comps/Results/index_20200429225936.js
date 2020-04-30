import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.png');

const Results = ({}) => <div> 
    <img src={} />
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

function AnswerClick() {
    alert("hi")
}

Card.defaultProps = {
    couchpotatoImg:couchpotatoImg
}

export default Card;