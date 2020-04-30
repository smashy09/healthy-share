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

    <Link href="/HomePage"><button>Home</button></Link>
    <Link href="/InformationPage"><button>Information</button></Link>
    <Link href="/Survey1"><button>Survey1</button></Link>
    <Link href="/Survey2"><button>Survey2</button></Link>
    <Link href="/Survey3"><button>Survey3</button></Link>
    <Link href="/ResultPage"><button>Results</button></Link> 
    <Link href="/Animation"><button>Anime</button></Link> 
</div>

export default Index;