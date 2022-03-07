import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../layouts";

const MonthStats = () => {
  const months = useSelector((state) => state.stats);
  const [monthStats, setMonthStats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    months.map((el) =>
      el.monthName.toLowerCase() === id ? setMonthStats(el.data) : null
    );
  }, []);

  return (
    <Layout>
      <div className="monthstats">
        <ul className="monthstats__list">
          {monthStats?.map((el, i) => {
            return <MonthCard month={el} key={i} />;
          })}
        </ul>
      </div>
    </Layout>
  );
};

const MonthCard = (props) => {
  const { month } = props;
  const { name, start_date, distance, elapsed_time, total_elevation_gain } =
    month;

  const newDate = start_date
    .split("T")
    .join(",")
    .split("Z")
    .join(",")
    .split(",");

  return (
    <div className="card">
      <li>
        <div className="top">
          <h3 className="card__name">{name}</h3>
          <div className="card__start-date">
            <span>{newDate[0]}</span>
            <br />
            <span>{newDate[1]}</span>
          </div>
        </div>

        <div className="bottom">
          <div className="card__distance">
            Distance
            <br />
            <span>{distance}</span>
          </div>
          <div className="card__elapsed-time">
            Elapsed time
            <br />
            <span>{elapsed_time}</span>
          </div>
          <div className="card__total-elevation-gain">
            Elevation gain
            <br />
            <span>{total_elevation_gain}</span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default MonthStats;
