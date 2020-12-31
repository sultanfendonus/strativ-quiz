import { db } from "db";

export const SET_QUESTION_LIST = "SET_QUESTION_LIST";
export const QUESTION_ASSET = "QUESTION_ASSET";

export const getAllQuestion = () => async dispatch => {
  try {
    const allQuestion = await db.question
      .orderBy("id")
      .reverse()
      .toArray();
    if (allQuestion) {
      dispatch({ type: SET_QUESTION_LIST, payload: allQuestion });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addNewQuestionToQuestionBank = data => async dispatch => {
  try {
    db.question.add(data).then(async () => {
      dispatch(getAllQuestion());
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateQuestionInQuestionBank = data => async dispatch => {
  try {
    db.question.put(data);
    dispatch(getAllQuestion());
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestionFromQuestionBank = questionId => async dispatch => {
  try {
    db.question.delete(questionId);
    dispatch(getAllQuestion());
  } catch (error) {
    console.log(error);
  }
};
