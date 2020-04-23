import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){

    document.querySelector("#mainapp").style.left = "-100%";
    setTimeout(function(){
        Router.push("/ResultPage");
    }, 1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>

    <Link href="/ResultPage"><button>Results!</button></Link>
</div>

export default Index;