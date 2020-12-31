import { combineReducers } from "redux";

import QuestionBankReducers from "./QuestionBankReducers";
import AnswerReducer from "./AnswerReducer";
import OtherReducers from "./OtherReducers";

const rootReducer = combineReducers({
  QuestionBankReducer: QuestionBankReducers,
  AnswerReducer: AnswerReducer,
  OtherReducer: OtherReducers
});

export default rootReducer;
