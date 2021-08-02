import React from 'react';
import {Link,Route} from "react-router-dom"
import "../styles/HomeV1.css";
import fourEight from "../images/fourEight.gif"
import Rules from "./Rules"
import eightBit from "../images/eightBit.png"
import App from '../App';


const HomeV1 = () => {
    return (
        <div>
            <div className="top">
                <div className="two">2</div>
                <div className="zero">0</div>
                <div className="four">4</div>
                <div className="eight">8</div>
            </div>
            <div className="hero">
                <div className="sectionA">
                    <div className="sectionA_one">Alpha</div>
                    <div className="sectionA_two">
                        <div className="decoration"></div>
                        <div>Geeks</div>
                        </div>
                    <div className="sectionA_three">Team</div>
                </div>
                <div className="sectionB">
                    <img src={fourEight} alt="fourEight" className="sectionB_image"/>
                </div>
            </div>
            <div className="links">
                    <div className="anim-newgame animate__animated animate__bounce animate__infinite	infinite"><Link to="/app" className="newgame">New Game</Link></div>
                    <div className="anim-newgame animate__animated animate__bounce animate__infinite	infinite"><Link to="/rules" className="rules">Rules</Link>
            </div>
            <div className="eightBit">
                <img src={eightBit} alt="eightBit"/>
            </div>
        </div>
            <Route path="/app" component={App}></Route>
            <Route path="/rules" component={Rules}></Route>
        </div>
    )
}

export default HomeV1
