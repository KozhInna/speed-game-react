import Circle from "../UI_components/Circle";
import styles from "./Game.module.css";

function Game({ score, circles, stopHandler, circleClickHandler }) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.game_box}>
          <div>
            <p>{score}</p>
          </div>
          <div className={styles.circles_box}>
            {circles.map((_, i) => (
              <Circle key={i} id={i} circleClickHandler={circleClickHandler} />
            ))}
          </div>
          <button onClick={stopHandler}>Stop game</button>
        </div>
      </div>
    </>
  );
}

export default Game;
