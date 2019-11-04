//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0); //sets the initial home score state value to '0'
  const [awayScore, setAwayScore] = useState(0); //sets the inital away score state value to '0'

  //onClick eventListener to increase homeScore by 7 points for touchdown
  const homeTouchdown = event => {
    setHomeScore(homeScore + 7);
  };

  //onClick eventListener to increase homeScore by 3 points for fieldgoal
  const homeFieldgoal = event => {
    setHomeScore(homeScore + 3);
  };

  //onClick eventListener to increase awayScore by 7 points for touchdown
  const awayTouchdown = event => {
    setAwayScore(awayScore + 7);
  };

  //onClick eventListener to increase awayScore by 3 points for fieldgoal
  const awayFieldgoal = event => {
    setAwayScore(awayScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">32</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">32</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
