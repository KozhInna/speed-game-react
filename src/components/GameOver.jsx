import styles from "./GameOver.module.css";
function GameOver({ name, score, level, closeHandler }) {
  return (
    <div className={styles.layout}>
      <div className={styles.gameOverBox}>
        <h1>Game over</h1>
        <div className={styles.details}>
          <p>{name}</p>
          <div className={styles.score}>
            <p>Your score: {score}</p>
            <p>Your level: {level}</p>
          </div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          error vitae earum ratione repudiandae asperiores reiciendis, commodi
          dignissimos dolore voluptates necessitatibus sequi vel molestias
          fugiat magnam, amet assumenda eaque. Aliquid libero ad sed adipisci
          minima sit inventore veniam eaque repudiandae aperiam dignissimos
          tenetur necessitatibus, ipsum odit molestias unde accusantium et.
        </p>
        <button onClick={closeHandler} className={styles.closeButton}>
          ╳
        </button>
      </div>
    </div>
  );
}

export default GameOver;
