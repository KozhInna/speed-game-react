import Circle from "../UI_components/Circle";
import styles from "./Game.module.css";

function Game({ score, circles, stopHandler, circleClickHandler, current }) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.game_box}>
          <div>
            <p>Your score: {score}</p>
          </div>
          <div className={styles.circles_box}>
            {circles.map((_, i) => (
              <Circle
                current={current === i}
                key={i}
                id={i}
                circleClickHandler={circleClickHandler}
              />
            ))}
          </div>
          <button onClick={stopHandler}>Stop game</button>
        </div>
      </div>
    </>
  );
}

export default Game;
