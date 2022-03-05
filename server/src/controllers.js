const axios = require("axios");
require("dotenv").config();
const { ACCESS_TOKEN } = process.env;
const base_url = "https://www.strava.com/api/v3";
const access_token = `access_token=${ACCESS_TOKEN}`;

const getActivities = async (req, res) => {
  try {
    const url = `${base_url}/activities?${access_token}`;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getActivities,
};
