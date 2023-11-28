import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";

import Game from "./components/Game";
import GameOver from "./components/GameOver";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameLaunch, setGameLaunch] = useState(true);

  function gameSetHandler(level, name) {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const amountOfCircles = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: amountOfCircles }, (x, i) => i);

    setCircles(circlesArray);
    setPlayer({ level: level, name: name });
    setGameLaunch(!gameLaunch);
    setGameStart(!gameStart);
  }

  const stopHandler = () => {
    setGameStart(!gameStart);
    setGameOver(!gameOver);
  };

  return (
    <>
      <h1>Catch me</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}

      {gameStart && (
        <Game score={score} circles={circles} stopHandler={stopHandler} />
      )}
      {gameOver && <GameOver />}
    </>
  );
}

export default App;
