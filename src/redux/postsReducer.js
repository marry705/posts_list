import { POST } from '../constants/constants';
import { getLocalStorage, setLocalStorage } from './actions';

let posts = getLocalStorage('posts') ? JSON.parse(getLocalStorage('posts')) : [];

const initialState = {
    posts: posts
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST.ADD_NEW_POST:
          posts = state['posts'].concat([{ data: action.payload, id: action.payload.id + action.payload.subreddit_id, isFavorite: false }]);
          setLocalStorage('posts', JSON.stringify(posts));
          return {...state, posts: posts};

        case POST.REMOVE_POST:
          posts = state['posts'].filter( post => post.id !== action.payload);
          setLocalStorage('posts', JSON.stringify(posts));
          return {...state, posts: posts};

        case POST.CHANGE_POST_STATUS:
          posts = state['posts'].map( post => {
            if (post.id === action.payload) {
              return { data: post.data, id: post.id, isFavorite: !post.isFavorite };
            }
            return post;
          })
          setLocalStorage('posts', JSON.stringify(posts));
          return {...state, posts: posts};
  
        default: return state
    }
};

export default postsReducer;