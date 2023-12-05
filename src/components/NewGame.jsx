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
        <h1>Catch me</h1>
        <h2>Start a game by choosing and entering your name</h2>
        <input type="text" onChange={inputHandler} />
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
