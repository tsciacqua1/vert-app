import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <ul className="stats__list"></ul>
      </div>
    </Layout>
  );
};

export default Stats;
