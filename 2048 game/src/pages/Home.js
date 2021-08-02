import React from 'react';
import unknown from "../images/unknown.png"
import "../styles/Home.css"

const Home = () => {
    return (
        <div className="hero">
            <div className="hero_sectionA">
                <img className="animate__animated animate__jello animate__infinite infinite" src={unknown} alt="2048"/>
            </div>
            <div className="hero_sectionB">
                <div>
                    <h1>2048</h1>
                    <p>Test Your Might</p>
                </div>
                <div className="description"></div>
                <p>2048 is an easy and fun puzzle game. Even if you don't love numbers you will love this game. It is played on a 4x4 grid using the arrows or W, A, S, D keys alternatively. Every time you press a key - all tiles slide. </p>
                <br/>
                <p>Tiles with the same value that bump into one-another are merged. Although there might be an optimal strategy to play, there is always some level of chance. If you beat the game and would like to master it, try to finish with a smaller score. That would mean that you finished with less moves.</p>
                <div className="links">
                <a className="rules" href="/">Rules</a>
                </div>
                
            </div>
        </div>
    )
}

export default Home
// https://webdesign.tutsplus.com/articles/html-gaming-website-templates--cms-35667
// https://www.awwwards.com/sites/planet-of-lana
// https://dribbble.com/shots/14972051-AC64-Weapon-Detail-Menu-GUI
