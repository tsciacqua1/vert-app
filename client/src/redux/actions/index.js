import axios from "axios";

export const getUserActivities = () => async (dispatch) => {
  const response = await axios.get("/activities");

  dispatch({
    type: "GET_USER_ACTIVITIES",
    payload: response.data,
  });
};

export const getUserStats = () => async (dispatch) => {
  const response = await axios.get("/stats");

  dispatch({
    type: "GET_USER_STATS",
    payload: response.data,
  });
};
