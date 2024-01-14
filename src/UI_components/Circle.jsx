function Circle({ circleClickHandler, current, id }) {
  return (
    <div
      className={`circle ${current ? "active" : ""}`}
      onClick={() => circleClickHandler(id)}
    ></div>
  );
}

export default Circle;
