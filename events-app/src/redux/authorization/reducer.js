import { fa } from "faker/lib/locales";
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

const initialState = {
  user: {},
  loading: false,
  isAuthorized: false,

  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isGoogleLoggingIn: false,

  failLogIn: false,
  failSignUp: false,
  failLogOut: false,
  failGoogleLogIn: false,
};

const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
        isSigningUp: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSigningUp: false,
        isAuthorized: true,
        failSigningUp: false,
        user: action.payload,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isSigningUp: false,
        failSigningUp: true,
      };

    case USER_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        isLoggingIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggingIn: false,
        isAuthorized: true,
        failLogIn: false,
        user: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggingIn: false,
        failLogIn: true,
      };
    case USER_LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
        isLoggingOut: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggingOut: false,
        isAuthorized: false,
        failLogOut: false,
        user: {},
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggingOut: false,
        failLogOut: true,
      };
    case UPDATE_AUTHORIZATION:
      return {
        ...state,
        isAuthorized: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
