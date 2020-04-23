import Link from 'next/link';
import Router from 'next/router';
import './app.css';

const Index = () => <div>
    <div>Index</div>

    <Link href="/ResultPage"><button>Results!</button></Link>
</div>

export default Index;