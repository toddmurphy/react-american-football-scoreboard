//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

const lionsTeam = 'Lions';
const tigersTeam = 'Tigers';
const touchdown = 7;
const fieldgoal = 3;

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0); //sets the initial home score state value to '0'
  const [tigersScore, setTigersScore] = useState(0); //sets the inital away score state value to '0'

  //Home score
  //onClick eventListener to increase homeScore by 7 points for homeTouchdown
  /* const homeTouchdown = event => {
    setHomeScore(homeScore + touchdown);
  }; */

  //onClick eventListener to increase homeScore by 3 points for homeFieldgoal
  /*  const homeFieldgoal = event => {
    setHomeScore(homeScore + fieldgoal);
  }; */

  //Away score
  //onClick eventListener to increase awayScore by 7 points for awayTouchdown
  /* const awayTouchdown = event => {
    setAwayScore(awayScore + touchdown);
  }; */

  //onClick eventListener to increase awayScore by 3 points for awayFieldgoal
  /* const awayFieldgoal = event => {
    setAwayScore(awayScore + fieldgoal);
  }; */

  //Callback function to pass into one function to 'change score/update state'
  function higherOrderAddToScore(teamScore, typeOfScore, cb) {
    return cb(teamScore + typeOfScore);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{lionsTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{tigersTeam}</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => higherOrderAddToScore(lionsScore, touchdown, setLionsScore)} className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button onClick={() => higherOrderAddToScore(lionsScore, fieldgoal, setLionsScore)} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button onClick={() => higherOrderAddToScore(tigersScore, touchdown, setTigersScore)} className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button onClick={() => higherOrderAddToScore(tigersScore, fieldgoal, setTigersScore)} className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
          <button
            onClick={() => {
              setLionsScore(0);
              setTigersScore(0);
            }}
            className="awayButtons__fieldGoal"
          >
            Reset Score
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
