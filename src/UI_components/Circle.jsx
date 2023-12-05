import styles from "./Circle.module.css";

function Circle({ circleClickHandler, current, id }) {
  return (
    <div
      className={current ? styles.circle : null}
      onClick={() => circleClickHandler(id)}
    ></div>
  );
}

export default Circle;
