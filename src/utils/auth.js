export const removeTokenAndRelevantInfo = () => {
  localStorage.removeItem("role");
  localStorage.removeItem("token");
};
