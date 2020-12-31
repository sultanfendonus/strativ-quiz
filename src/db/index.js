import Dexie from "dexie";

export const db = new Dexie("QuestionDatabase");
db.version(6).stores({
  question: "++id,title,options",
  submittedAnswer: "++id,questionId,userId,answerValue,submissionHistory"
});
db.open();
