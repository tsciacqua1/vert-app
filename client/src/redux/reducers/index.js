const initialState = {
  activities: [],
  stats: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_ACTIVITIES": {
      return {
        ...state,
        activities: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
