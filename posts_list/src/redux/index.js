import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import postsReducer from './postsReducer';
import themeReducer from './themeReducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    posts: undoable(postsReducer, {
        limit: 10,     
        undoType: 'POST_UNDO',
        redoType: 'POST_REDO'
    })
});

export default rootReducer;