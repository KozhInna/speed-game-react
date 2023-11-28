import Circle from "../UI_components/Circle";

function Game({ score, circles, stopHandler }) {
  return (
    <>
      <div>
        <p>{score}</p>
      </div>

      {circles.map((el, i) => (
        <Circle key={i} />
      ))}
      <button onClick={stopHandler}>Stop game</button>
    </>
  );
}

export default Game;
