import { message } from "antd";
import moduleName from "../../../";

import {
  USER_SIGNUP_BEGIN,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_BEGIN,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  UPDATE_AUTHORIZATION,
} from "./constants";

export const signUpUser = (email, password, username) => {
  return async (dispatch) => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
    } catch (error) {
      message.error(error.message);
      dispatch();
    }
  };
};
