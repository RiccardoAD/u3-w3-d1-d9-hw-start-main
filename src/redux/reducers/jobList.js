import { GET_JOBS } from "../actions";

const initialState = {
  jobList: [],
};

const jobList = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobList: action.payload,
      };

    default:
      return state;
  }
};
export default jobList;
