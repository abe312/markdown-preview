import updateInputReducer from './updateInputReducer';
// import loadingReducer from './loadingReducer';
// import errorReducer from './errorReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  input: updateInputReducer,
  // isLoading: loadingReducer,
  // error: errorReducer,
});

export default rootReducer;
