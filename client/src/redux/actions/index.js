import axios from "axios";

export const getUserActivities = () => async (dispatch) => {
  const response = await axios.get("/activities");

  dispatch({
    type: "GET_USER_ACTIVITIES",
    payload: response.data,
  });
};
