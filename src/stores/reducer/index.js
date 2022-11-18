import {combineReducers} from 'redux';

import counter from './counter';
import user from './user';
import event from './event';
import wishlist from './wishlist';
import auth from './auth';

export default combineReducers({
  counter,
  user,
  event,
  wishlist,
  auth,
});
