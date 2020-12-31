import * as actionTypes from "actions";

const INIT_STATE = {
  questionList: null,
  questionAsset: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTION_LIST:
      return { ...state, questionList: action.payload };

    case actionTypes.QUESTION_ASSET:
      return { ...state, questionAsset: action.payload };

    default:
      return { ...state };
  }
};
