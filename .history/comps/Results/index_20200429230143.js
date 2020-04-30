import React from 'react';
import './results.css';

const couchpotatoImg = require('./couchpotato.png');

const Results = ({}) => <div> 
    <img src={couchpotatoImg} />

    <div className="result">
        {result}
    </div>

    <div class="solution">
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
    couchpotatoImg:couchpotatoImg,
    result:"You are leading a sort of potato couch lifestyle. Seems like you sit and eat too much and lack of sleep.",
}

export default Card;