import React, {useEffect} from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';
import ResultCard from '../../comps/ResultCard';
import Results from '../../comps/Results';
import Router from 'next/router';
import {data, ChangeData, Sumup} from '../../data';

<<<<<<< HEAD:.history/pages/ResultPage/index_20200516052554.js
const couchpotatoImg = require('./couchpotato.svg');
const effortneededImg = require('./effortneeded.svg');
const healthypersonImg = require('./healthyperson.svg');

=======
>>>>>>> 69e0a0742010b4e069bfcf62511899cbbb32c51b:.history/pages/ResultPage/index_20200516004721.js

console.log(data)

function GoHome(){
    Router.push("/HomePage");
}

<<<<<<< HEAD:.history/pages/ResultPage/index_20200516052554.js
const ResultPage = ({backgroundColor, margin, effortneededImg}) => {
=======
// var index = 0;
// const results_arr = [
//     {
//         healthytxt:"1-2 Hours",
//         balancedtxt:"3-5 Hours",
//         unhealthytxt:"7+ Hours",
//         text:"abcde",
//         img:""
//     },
//     {
//         healthytxt:"2000 Cal",
//         balancedtxt:"3000 Cal",
//         unhealthytxt:"4000+ Cal"
//     },
//     {
//         healthytxt:"7+ Hours",
//         balancedtxt:"5-6 Hours",
//         unhealthytxt:"3-4 Hours"
//     }
// ]


const ResultPage = ({backgroundColor, margin}) => {
>>>>>>> 69e0a0742010b4e069bfcf62511899cbbb32c51b:.history/pages/ResultPage/index_20200516004721.js
    Sumup()
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".resultpage").style.left = 0;
        },50);
    },[]);

    return <div style={{backgroundColor}} className="resultpage" >
        <Header />
        <div style={{margin:margin, textAlign:"center"}}>
        <ResultCard />
        </div>
<<<<<<< HEAD:.history/pages/ResultPage/index_20200516052554.js
        <Results type={data.type} result={data.result} image={data.image} />
=======
        <Results type={data.type} result={data.result} />
>>>>>>> 69e0a0742010b4e069bfcf62511899cbbb32c51b:.history/pages/ResultPage/index_20200516004721.js
        <div className="gohome_button">
            <CustomButton text="Start again!"  onClick={GoHome}/>
        </div>
    </div>
}
ResultPage.defaultProps = {
<<<<<<< HEAD:.history/pages/ResultPage/index_20200516052554.js
    couchpotatoImg:couchpotatoImg,
    effortneededImg: effortneededImg,
    healthypersonImg: healthypersonImg,
=======
    backgroundColor:"#",
>>>>>>> 69e0a0742010b4e069bfcf62511899cbbb32c51b:.history/pages/ResultPage/index_20200516004721.js
    margin:"20px 0"
}



export default ResultPage;