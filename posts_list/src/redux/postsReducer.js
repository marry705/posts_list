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
          return {...state, isLoading: true, error: '', posts: []}
  
        case REQUEST.REQUEST_DATA_SUCCEEDED:
          return {...state, isLoading: false, posts: action.payload}

        case REQUEST.REQUEST_DATA_FAILED:
          return {...state, isLoggedIn: false }

        case REQUEST.ADD_ERROR_MESSAGE:
          return {...state, error: action.payload}

        case REQUEST.CLEAR_ERROR_MESSAGE:
          return {...state, error: ''}
  
        default: return state
    }
};