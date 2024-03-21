import React from "react";
import "./styles.css"
import Navbar from '../Navbar';
const Home = () => {
    return (
        <div className="webcontainer">
             {/* <Navbar/> */}
            <div className="left">
                <h4>Lets Make the Best Investment</h4>
                <h1>There Is No Friend As Loyal As A Book </h1>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</h3>
                <br/>
                <input placeholder="Your email"></input>
                <button>Subscribe</button>
            </div>
            <div className="right">
                <img src="https://wonted-react.vercel.app/assets/images/hero.png" alt="book image"></img>
            </div>
        </div>
    )
}
export default Home;