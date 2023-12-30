import { useState } from "react";
import styles from "./NewGame.module.css";

function NewGame({ onclick }) {
  const [name, setName] = useState("");
  const inputHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.interface}>
        <h2>Enter your name</h2>
        <input type="text" onChange={inputHandler} />
        <h2>Set a level of difficulty to start a game</h2>
        <div className={styles.btn_container}>
          <button onClick={() => onclick("easy", name)}>Easy</button>
          <button onClick={() => onclick("medium", name)}>Medium</button>
          <button onClick={() => onclick("hard", name)}>Hard</button>
        </div>
      </div>
    </div>
  );
}

export default NewGame;
