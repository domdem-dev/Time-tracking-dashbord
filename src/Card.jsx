import "./styles/Card.css"

export default function Card({title,current,time,previous}) {
  return (
    <article id={title} className="cards">
      <div className="info">
        <div className="first-line">
          <p className="title">{title}</p>
          <img
            src="./images/icon-ellipsis.svg"
            className="ellipsis"
            alt="three dots icon"
          />
        </div>
        <div className="second-line">
          <p className="actual">{current}hrs</p>
          <p className="previous">Last {time} - {previous}hrs</p>
        </div>
      </div>
    </article>
  );
}
