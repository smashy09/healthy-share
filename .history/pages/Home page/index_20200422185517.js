import React from 'react';
import './home.css';

//madec the UI
const img = require('./logo.png');
const HomePage = () => <div className="All_home_page">
<h1>Healthy-U</h1>
<img src={img}/>
<h3>Become a better U today!</h3>
<p>Additional Information click here</p>
</div>

HomePage.defaultProps = {
    place:"New Button",
    img:img,
    onClick:()=>{}
}
export default HomePage;