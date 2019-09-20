import updateInputReducer from './updateInputReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  input: updateInputReducer,
});

export default rootReducer;
