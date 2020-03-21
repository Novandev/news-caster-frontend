import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, userProfile:{} } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.SIGNUP_REQUEST:
        return {
          ...state,
          loggingIn: true,
          user: action.user
        };
      case userConstants.SIGNUP_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          user: action.user
        };
      case userConstants.SIGNUP_FAILURE:
        return {};

      case userConstants.USERS_PROFILE_REQUEST:
        return {
          ...state,
          userProfile: action.userProfile
        };
      case userConstants.USERS_PROFILE_SUCCESS:
        return {
          ...state,
          userProfile: action.userProfile
        };
      case userConstants.USERS_PROFILE_FAILURE:
        return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}