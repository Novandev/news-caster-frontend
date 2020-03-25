import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { interests,getOneInterest,getOneEditInterest,postEditInterest,postNewInterest } from './interests.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  interests,
  getOneInterest,
  getOneEditInterest,
  postEditInterest,
  postNewInterest
  
});

export default rootReducer;