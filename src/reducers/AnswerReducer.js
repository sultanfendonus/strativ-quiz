import * as actionTypes from "actions";

const INIT_STATE = {
  submittedQuestionList: null,
  submissionList: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SUBMITTED_QUESTION_LIST:
      return { ...state, submittedQuestionList: action.payload };

    case actionTypes.SET_SUBMISSION_LIST:
      return { ...state, submissionList: action.payload };

    default:
      return { ...state };
  }
};
