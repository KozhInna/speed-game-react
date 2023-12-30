import { useState, useRef } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import slapSound from "../src/assets/sounds/slap.wav";
import endSound from "../src/assets/sounds/negative_beeps.mp3";

const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [current, setCurrent] = useState();

  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);

  let pace = 1000;
  let amountOfCircles;

  function gameSetHandler(level, name) {
    const { amount } = levels.find((el) => el.name === level);
    amountOfCircles = amount;

    const circlesArray = Array.from({ length: amountOfCircles }, (_, i) => i);

    setCircles(circlesArray);
    setPlayer({ level: level, name: name });
    setGameLaunch((prevLaunch) => !prevLaunch);
    gameStart();
  }
  function gameStart() {
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
    playEndGame();
  };
  function closeHandler() {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(0);
  }

  function circleClickHandler(id) {
    console.log("current_id", id);
    console.log("id", id);
    if (current !== id) {
      stopHandler();
      return;
    }
    rounds.current--;
    setScore((prevScore) => prevScore + 10);
    playSlap();
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
  }

  function playSlap() {
    new Audio(slapSound).play();
  }
  function playEndGame() {
    new Audio(endSound).play();
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
        />
      )}
      {gameOver && (
        <GameOver score={score} {...player} closeHandler={closeHandler} />
      )}
    </>
  );
}

export default App;
