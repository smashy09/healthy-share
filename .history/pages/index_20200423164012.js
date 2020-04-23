import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){
    if(confirm("Are you sure?")){
        //move toe ResultPage
        Router.push("/ResultPage");
    }
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>

    <Link href="/ResultPage"><button>Results!</button></Link>
</div>

export default Index;