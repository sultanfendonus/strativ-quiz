import * as actionTypes from "actions";

const INIT_STATE = {
  errorMessage: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };

    default:
      return { ...state };
  }
};
