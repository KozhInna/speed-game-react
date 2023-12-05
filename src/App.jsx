import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";

import Game from "./components/Game";
import GameOver from "./components/GameOver";
const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [current, setCurrent] = useState(-1);

  let timer;
  let pace = 1000;

  function gameSetHandler(level, name) {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const amountOfCircles = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: amountOfCircles }, (x, i) => i);

    setCircles(circlesArray);
    setPlayer({ level: level, name: name });
    setGameLaunch(!gameLaunch);
    setGameStart(!gameStart);
    randomNumb();
  }

  const stopHandler = () => {
    setGameStart(!gameStart);
    setGameOver(!gameOver);
    clearTimeout(timer);
  };
  function closeHandler() {
    setGameLaunch(!gameLaunch);
    setGameOver(!gameOver);
  }
  function circleClickHandler(id) {
    setScore(score + 10);
  }
  function randomNumb() {
    let nextActive;
    do {
      nextActive = getRandomNum(0, circles.length);
    } while (nextActive === current);
    setCurrent(nextActive);
    timer = setTimeout(randomNumb, pace);
    console.log(nextActive);
  }
  return (
    <>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}

      {gameStart && (
        <Game
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
