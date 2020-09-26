import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const position = <FontAwesomeIcon icon={faMapMarkerAlt} />;

function Card({ city, Fajr, Dhuhr, Asr, Maghrib, Isha }) {
  return (
    <div className="prayer-card">
      <div className="info">
        <div className="title">
          <h2>
            {city}&nbsp;{position}
          </h2>
        </div>
        <div className="date">
          <p>
            {new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
              day: "numeric",
              month: "long",
              weekday: "long",
              year: "numeric",
            }).format(Date.now())}
          </p>
        </div>
      </div>
      <div className="content-time">
        <ul className="time">
          <li className="items one">
            Fajr <br></br>
            {Fajr}
          </li>
          <li className="items two">
            Dhuhr <br></br>
            {Dhuhr}
          </li>
          <li className="items three">
            Asr <br></br> {Asr}
          </li>
          <li className="items four">
            Maghrib <br></br> {Maghrib}
          </li>
          <li className="items five">
            Isha  <br></br>
            {Isha}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
