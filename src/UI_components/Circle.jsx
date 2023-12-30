function Circle({ circleClickHandler, current, id }) {
  return (
    <div
      /* className={styles.circle} */
      className={`circle ${current ? "active" : ""}`}
      onClick={() => circleClickHandler(id)}
    ></div>
  );
}

export default Circle;
