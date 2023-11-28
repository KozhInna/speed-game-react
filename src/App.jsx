import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";

import Game from "./components/Game";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  function gameSetHandler(level, name) {
    //based on level, we find the matching object from levels array, and then make an array for the circles with amount in the object
    const levelIndex = levels.findIndex((el) => el.name === level);
    const amountOfCircles = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: amountOfCircles }, (x, i) => i);
    console.log(circlesArray);
    setCircles(circlesArray);
    // setting player object
    setPlayer({ level: level, name: name });
  }

  return (
    <>
      <h1>Catch me</h1>
      <NewGame onclick={gameSetHandler} />
      <Game score={score} circles={circles} />
    </>
  );
}

export default App;
