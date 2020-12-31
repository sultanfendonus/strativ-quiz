import Dexie from "dexie";

export const db = new Dexie("QuestionDatabase");
db.version(5).stores({
  question: "++id,title,options",
  submittedAnswer: "++id,questionId,userId,answerValue,submissionHistory",
  user: "++id,name,email,password,token"
});
db.open();
