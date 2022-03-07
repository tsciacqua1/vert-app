const axios = require("axios");
require("dotenv").config();
const { ACCESS_TOKEN } = process.env;
const base_url = "https://www.strava.com/api/v3";
const access_token = `access_token=${ACCESS_TOKEN}`;

const getActivities = async (req, res) => {
  try {
    const url = `${base_url}/activities?${access_token}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getStats = async (req, res) => {
  try {
    var data = [];
    var promises = [];
    var newData = [];

    const monthNameFunction = (date) => {
      var monthNum = new Date(date).getMonth() + 1;
      var monthName = new Date(`${monthNum}`);
      return monthName.toLocaleString("default", { month: "long" });
    };

    const totalDistanceMonth = (i) => {
      var total = null;
      data[i].map((el) => {
        total += el.distance;
      });
      return total;
    };

    const totalTimeMonth = (i) => {
      var total = null;
      data[i].map((el) => {
        total += el.elapsed_time;
      });
      return total;
    };

    const totalElevationGainMonth = (i) => {
      var total = null;
      data[i].map((el) => {
        total += el.total_elevation_gain;
      });
      return total;
    };

    for (let i = 3; i > 0; i--) {
      let date = new Date();
      let afterDate = new Date(date.getFullYear(), date.getMonth(), 1);
      let beforeDate = new Date(date.getFullYear(), date.getMonth(), 1);

      let newAfterDate = afterDate.setMonth(afterDate.getMonth() - i);
      let after = Math.floor(new Date(newAfterDate).getTime() / 1000.0);

      let newBeforeDate = beforeDate.setMonth(beforeDate.getMonth() - (i - 1));
      let before = Math.floor(new Date(newBeforeDate).getTime() / 1000.0);

      let url = `${base_url}/athlete/activities?${access_token}&after=${after}&before=${before}`;

      promises.push(axios.get(url));
    }

    const results = await Promise.all(promises);
    data = results.map((response) => response.data);

    for (let i = 0; i < data.length; i++) {
      let monthName = monthNameFunction(data[i][0].start_date);
      let totalDistance = totalDistanceMonth(i);
      let totalTime = totalTimeMonth(i);
      let totalElevationGain = totalElevationGainMonth(i);
      newData.push({
        [monthName]: {
          totalDistance,
          totalTime,
          totalElevationGain,
        },
      });
    }

    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};
getStats();

module.exports = {
  getActivities,
  getStats,
};
