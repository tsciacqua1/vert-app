import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { getUserStats } from "../../redux/actions";

const Stats = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  useEffect(() => {
    (async () => {
      await dispatch(getUserStats());
    })();
  }, []);

  return (
    <Layout>
      <div className="stats">
        <ul className="stats__list">
          {stats.map((el, i) => {
            return <MonthCard month={el} key={i} />;
          })}
        </ul>
      </div>
    </Layout>
  );
};

const MonthCard = (props) => {
  const { month } = props;
  const { monthName, totalDistance, totalTime, totalElevationGain } = month;

  return (
    <Link to={`/stats/${monthName.toLowerCase()}`}>
      <div className="card">
        <li>
          <div className="card__month-name">
            <h3>{monthName}</h3>
          </div>
          <div className="card__bottom">
            <div className="card__bottom__total-distance">
              Distance
              <br />
              <span>{totalDistance}</span>
            </div>
            <div className="card__bottom__total-time">
              Time
              <br />
              <span>{totalTime}</span>
            </div>
            <div className="card__bottom__total-elevation-gain">
              Elevation gain
              <br />
              <span>{totalElevationGain}</span>
            </div>
          </div>
        </li>
      </div>
    </Link>
  );
};

export default Stats;
