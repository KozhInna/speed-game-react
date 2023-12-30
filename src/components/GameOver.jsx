import styles from "./GameOver.module.css";
function GameOver({ name, score, level, closeHandler }) {
  return (
    <div className={styles.layout}>
      <div className={styles.gameOverBox}>
        <h2>Game over</h2>
        <div className={styles.details}>
          <p className={styles.name}>{name}</p>
          <div className={styles.score}>
            <p>
              Your score: <span className={styles.scoreLevel}>{score}</span>
            </p>
            <p>
              Your level: <span className={styles.scoreLevel}>{level}</span>
            </p>
          </div>
        </div>
        {score === 0 && <p>Try again or you will be bitten🩸.</p>}
        {score >= 10 && score < 50 && (
          <p>
            It not time to sleep! You will be disturbed by 🦟🦟🦟. Try again.
          </p>
        )}
        {score >= 50 && score < 100 && (
          <p>Now you can sleep some time 💤 quietly.</p>
        )}
        {score >= 100 && <p>Now you can sleep all night long 💤.</p>}

        <button onClick={closeHandler} className={styles.closeButton}>
          ╳
        </button>
      </div>
    </div>
  );
}

export default GameOver;
