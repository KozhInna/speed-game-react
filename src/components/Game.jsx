import Circle from "../UI_components/Circle";
/* import HealthLevel from "../UI_components/HealthLevel"; */
import styles from "./Game.module.css";

function Game({
  score,
  circles,
  /*  health, */
  stopHandler,
  circleClickHandler,
  current,
}) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.game_box}>
          <div className={styles.healthScore_box}>
            {/* <div className={styles.health_box}> */}
            {/* <HealthLevel />
              <HealthLevel />
              <HealthLevel /> */}
            {/* {health.map((_, i) => (
                <HealthLevel key={i} />
              ))} */}
            {/* </div> */}
            <h2>Your score: {score}</h2>
          </div>

          <div className={styles.circles_box}>
            {/*  <Circle />
            <Circle />
            <Circle /> */}

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
