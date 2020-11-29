import { REQUEST } from '../constants/constants';

const initialState = {
    theme: '',
    posts: [],
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
          return state;

        case REQUEST.REMOVE_POST:
          state['posts'].filter( post => post.id !== action.payload );
          return state;

        case REQUEST.CHANGE_POST_STATUS:
          state['posts'].map( post => {
            if (post.id === action.payload) {
              post.isFavorite = !post.isFavorite;
            }
          });
          return state;

        case REQUEST.ADD_ERROR_MESSAGE:
          return {...state, error: action.payload}

        case REQUEST.CLEAR_ERROR_MESSAGE:
          return {...state, error: ''}
  
        default: return state
    }
};