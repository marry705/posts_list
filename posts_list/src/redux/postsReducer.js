import { REQUEST } from '../constants/constants';
import { getLocalStorage, setLocalStorage } from './actions';

let posts = getLocalStorage('posts') ? JSON.parse(getLocalStorage('posts')) : [];

const initialState = {
    theme: '',
    posts: posts,
    isLoading: false,
    error: ''
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST.UPDATE_THEME:
          return {...state, theme: action.payload}
  
        case REQUEST.REQUESTED_DATA:
          return {...state, isLoading: true, error: ''}
        
        case REQUEST.REQUEST_FINISHED:
          return {...state, isLoading: false}
  
        case REQUEST.ADD_NEW_POST:
          state['posts'].push({ data: action.payload, id: action.payload.id, isFavorite: false });
          setLocalStorage('posts', JSON.stringify(state.posts));

          return state;

        case REQUEST.REMOVE_POST:
          posts = state['posts'].filter( post => post.id !== action.payload);
          setLocalStorage('posts', JSON.stringify(posts));

          return {...state, posts: posts};

        case REQUEST.CHANGE_POST_STATUS:
          posts = state['posts'].map( post => {
            if (post.id === action.payload) {
              post.isFavorite = !post.isFavorite;
            }
            return post;
          })
          setLocalStorage('posts', JSON.stringify(posts));

          return {...state, posts: posts};

        case REQUEST.ADD_ERROR_MESSAGE:
          return {...state, error: action.payload}

        case REQUEST.CLEAR_ERROR_MESSAGE:
          return {...state, error: ''}
  
        default: return state
    }
};