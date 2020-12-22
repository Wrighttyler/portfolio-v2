import React from "react";

import SEO from "../components/seo";

function WorkPage() {

  

    return (
        <>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Resume"
            />


            <section className="mx-auto  flex flex-col flex-wrap  w-2/3 justify-center items-center md:flex-row">
              
            <div className="wrapper clearfix">
    <div className="player-0-panel active">
      <div className="player-name" id="name-0">Player 1</div>
      <div className="player-score" id="score-0">43</div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id="current-0">11</div>
      </div>
    </div>

    <div className="player-1-panel">
      <div className="player-name" id="name-1">Player 2</div>
      <div className="player-score" id="score-1">72</div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id="current-1">0</div>
      </div>
    </div>

    <button className="btn-new">
      <i className="ion-ios-plus-outline"></i>New game
    </button>
    <button className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
    <button className="btn-hold">
      <i className="ion-ios-download-outline"></i>Hold
    </button>

    <img src="../images/dice-5.png" alt="Dice" className="dice" />
  </div>


            </section>
        </>
    );
}

export default WorkPage;
