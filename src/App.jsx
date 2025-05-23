import { useEffect, useState } from "react";
import "./styles/App.css";
import Card from "./Card.jsx";

function App() {
  const [data, setData] = useState([]);
  const [frame, setFrame] = useState("weekly");
  const [time, setTime] = useState("Week");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (frame === "daily") {
      setTime("Day");
    }
    if (frame === "weekly") {
      setTime("Week");
    }
    if (frame === "monthly") {
      setTime("Month");
    }
  }, [frame]);

  const cards = data.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      current={card.timeframes[frame].current}
      time={[time]}
      previous={card.timeframes[frame].previous}
    />
  ));

  return (
    <>
      <main id="main-container">
        <article id="avatar">
          <div id="first-section">
            <img
              src="./images/image-jeremy.png"
              alt="avatar profile picture"
              id="profile-picture"
            />
            <div id="name">
              <h1>Report for</h1>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <ul id="timeframes">
            <li
              onClick={() => setFrame("daily")}
              className={frame === "daily" ? "active" : ""}
            >
              Daily
            </li>
            <li
              onClick={() => setFrame("weekly")}
              className={frame === "weekly" ? "active" : ""}
            >
              Weekly
            </li>
            <li
              onClick={() => setFrame("monthly")}
              className={frame === "monthly" ? "active" : ""}
            >
              Monthly
            </li>
          </ul>
        </article>

        {cards}
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/domdem-dev" target="_blank">domdem-dev</a>.
      </div>
    </>
  );
}

export default App;
