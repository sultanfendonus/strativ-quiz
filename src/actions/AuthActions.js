import { adminAccount, userAccounts } from "../constant/account";
import { removeTokenAndRelevantInfo } from "../utils/auth";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const adminSignIn = (email, password, history) => async dispatch => {
  try {
    let invalidLogin;
    adminAccount.forEach(admin => {
      if (admin.email === email) {
        if (admin.password === password) {
          window.localStorage.setItem("token", admin.token);
          window.localStorage.setItem("role", "admin");
          window.localStorage.setItem("user", JSON.stringify(admin));
          history.push("/admin/dashboard/question");
        } else {
          invalidLogin = true;
        }
      } else {
        invalidLogin = true;
      }
    });
    if (invalidLogin) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: "Invalid Login Credential!"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const adminSignOut = history => async dispatch => {
  try {
    removeTokenAndRelevantInfo();
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};

export const userSignIn = (email, password, history) => async dispatch => {
  try {
    let invalidLogin;
    userAccounts.forEach(user => {
      if (user.email === email) {
        if (user.password === password) {
          window.localStorage.setItem("token", user.token);
          window.localStorage.setItem("role", "user");
          window.localStorage.setItem("user_id", user.id);
          window.localStorage.setItem("user", JSON.stringify(user));
          history.push("/user/dashboard/question");
        } else {
          invalidLogin = true;
        }
      } else {
        invalidLogin = true;
      }
    });
    if (invalidLogin) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: "Invalid Login Credential!"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const userSignOut = history => async dispatch => {
  try {
    removeTokenAndRelevantInfo();
    window.location.href = "/auth/user/login";
  } catch (error) {
    console.log(error);
  }
};
