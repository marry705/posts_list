import { POST } from '../constants/constants';
import { getLocalStorage, setLocalStorage } from './actions';

let posts = getLocalStorage('posts') ? JSON.parse(getLocalStorage('posts')) : [];

const initialState = {
    posts: posts
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST.ADD_NEW_POST:
          state['posts'].push({ data: action.payload, id: action.payload.id, isFavorite: false });
          setLocalStorage('posts', JSON.stringify(state.posts));
          return state;

        case POST.REMOVE_POST:
          posts = state['posts'].filter( post => post.id !== action.payload);
          setLocalStorage('posts', JSON.stringify(posts));
          return {...state, posts: posts};

        case POST.CHANGE_POST_STATUS:
          posts = state['posts'].map( post => {
            if (post.id === action.payload) {
              post.isFavorite = !post.isFavorite;
            }
            return post;
          })
          setLocalStorage('posts', JSON.stringify(posts));
          return {...state, posts: posts};
  
        default: return state
    }
};

export default postsReducer;