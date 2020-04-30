import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.png');

const Results = ({}) => <div> 
    <img src={couchpotatoImg} />
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



Results.defaultProps = {
    couchpotatoImg:couchpotatoImg
}

export default Card;