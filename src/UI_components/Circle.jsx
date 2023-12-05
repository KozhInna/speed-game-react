import styles from "./Circle.module.css";

function Circle({ circleClickHandler, id }) {
  return (
    <div className={styles.circle} onClick={() => circleClickHandler(id)}>
      <p>{id + 1}</p>
    </div>
  );
}

export default Circle;
