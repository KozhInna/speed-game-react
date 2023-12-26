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
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [current, setCurrent] = useState(-1);
  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);

  let pace = 1000;
  let amountOfCircles;

  function gameSetHandler(level, name) {
    const { amount } = levels.find((el) => el.name === level);
    amountOfCircles = amount;

    const circlesArray = Array.from({ length: amount }, (_, i) => i);

    setCircles(circlesArray);
    setPlayer({ level: level, name: name });
    setGameLaunch(false);
    setGameStart(true);
    randomNumb();
  }

  const stopHandler = () => {
    setGameStart(false);
    setGameOver(true);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  };
  function closeHandler() {
    setGameLaunch(true);
    setGameOver(false);
  }
  function circleClickHandler(id) {
    console.log("id", id);
    if (current !== id) {
      stopHandler();
      return;
    } else {
      rounds.current--;
      setScore(score + 10);
    }
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
    console.log(nextActive);
    pace *= 0.95;
  }
  return (
    <>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}

      {gameStart && (
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
