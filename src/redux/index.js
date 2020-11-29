import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import postsReducer from './postsReducer';
import requestReducer from './requestReducer';

export const rootReducer = combineReducers({
    request: requestReducer,
    posts: undoable(postsReducer)
});

export default rootReducer;