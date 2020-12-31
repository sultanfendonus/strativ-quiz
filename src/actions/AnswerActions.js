import { db } from "../db";
import { getAllQuestion } from "./QuestionBankAction";

export const SET_SUBMITTED_QUESTION_LIST = "SET_SUBMITTED_QUESTION_LIST";
export const SET_SUBMISSION_LIST = "SET_SUBMISSION_LIST";

export const submitAnswer = data => async dispatch => {
  try {
    db.submittedAnswer.add(data);
    dispatch(getAllQuestion());
    dispatch(getSubmittedQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const reSubmitAnswer = data => async dispatch => {
  try {
    db.submittedAnswer.put(data);
    dispatch(getAllQuestion());
    dispatch(getSubmittedQuestions());
    console.log("dispatched");
  } catch (error) {
    console.log(error);
  }
};

export const getSubmittedQuestions = () => async dispatch => {
  try {
    const user = window.localStorage.getItem("user_id");

    const submittedQuestion = await db.submittedAnswer
      .where({ userId: user })
      .toArray();

    await Promise.all(
      submittedQuestion.map(async item => {
        [item.question] = await Promise.all([db.question.get(item.questionId)]);
      })
    );

    if (submittedQuestion) {
      dispatch({
        type: SET_SUBMITTED_QUESTION_LIST,
        payload: submittedQuestion
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSubmissionByQuestionId = questionId => async dispatch => {
  try {
    const questions = await db.submittedAnswer
      .where({ questionId: questionId })
      .toArray();

    await Promise.all(
      questions.map(async item => {
        [item.question] = await Promise.all([db.question.get(item.questionId)]);
      })
    );

    if (questions) {
      dispatch({
        type: SET_SUBMISSION_LIST,
        payload: questions
      });
    }
  } catch (error) {
    console.log(error);
  }
};
