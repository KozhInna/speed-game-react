import { useState, useRef } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";

import Game from "./components/Game";
import GameOver from "./components/GameOver";

const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState(false); //false
  const [gameOver, setGameOver] = useState(false);
  const [gameLaunch, setGameLaunch] = useState(true); //true
  const [current, setCurrent] = useState(); //-1
  /*  const healtharr = [1, 2, 3];
  const [health, setHealth] = useState(healtharr); */

  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);

  /* console.log("health", health); */
  console.log("current", current);

  let pace = 1000;
  let amountOfCircles;

  function gameSetHandler(level, name) {
    const { amount } = levels.find((el) => el.name === level);
    amountOfCircles = amount;

    const circlesArray = Array.from({ length: amountOfCircles }, (_, i) => i);

    setCircles(circlesArray);
    setPlayer({ level: level, name: name });
    /* setGameLaunch(false); */
    setGameLaunch((prevLaunch) => !prevLaunch);
    gameStart();
  }
  function gameStart() {
    /*  setGameStart(true); */
    setGameOn(!gameOn);
    randomNumb();
  }

  const stopHandler = () => {
    setGameOn(false);
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
    rounds.current = null;
    pace = 1000;
  };
  function closeHandler() {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(0);
    // setGameLaunch(true);
    // setGameOver(false);
  }

  /*  function healthhandler() {
    const newHealth = healtharr.slice(-health.lenght + 1);
    setHealth(newHealth);
  } */

  function circleClickHandler(id) {
    console.log("current_id", id);
    console.log("id", id);
    if (current !== id) {
      /* if (health.length > 1) {
        healthhandler();
      } else { */
      stopHandler();
      return;
      /*   } */
    }
    rounds.current--;
    // setScore(score + 10);
    setScore((prevScore) => prevScore + 10);
  }

  function randomNumb() {
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive = getRandomNum(0, amountOfCircles);
    } while (nextActive === currentInst.current);

    setCurrent(nextActive);
    rounds.current++;
    currentInst.current = nextActive;
    timeoutIdRef.current = setTimeout(randomNumb, pace);
    pace *= 0.95;

    console.log("nextActive", nextActive);
  }

  return (
    <>
      <h1>Catch mosquitos</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}

      {gameOn && (
        <Game
          current={current}
          score={score}
          circles={circles}
          stopHandler={stopHandler}
          circleClickHandler={circleClickHandler}
          /* health={health} */
        />
      )}
      {gameOver && (
        <GameOver score={score} {...player} closeHandler={closeHandler} />
      )}
    </>
  );
}

export default App;
