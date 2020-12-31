export const isCorrectAnswer = (ans, options) => {
  return options.map(option => {
    if (option.optionText === ans) {
      if (option.correct) {
        return "(correct)";
      } else {
        return "(wrong)";
      }
    } else {
      return null;
    }
  });
};
