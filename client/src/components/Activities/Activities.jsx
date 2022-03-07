import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layouts";
import { getUserActivities } from "../../redux/actions";

const Activities = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    (async () => {
      await dispatch(getUserActivities());
    })();
  }, []);

  return (
    <Layout>
      <div className="activities">
        <ul className="activities__list">
          {activities.map((el) => {
            return <ActivityCard activity={el} key={el.id} />;
          })}
        </ul>
      </div>
    </Layout>
  );
};

const ActivityCard = (props) => {
  const { activity } = props;
  const { name, start_date, distance, elapsed_time, total_elevation_gain } =
    activity;

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

export default Activities;
