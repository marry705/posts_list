import { REQUEST } from '../constants/constants';

const initialState = {
    theme: '',
    isLoading: false,
    error: ''
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST.UPDATE_THEME:
          return {...state, theme: action.payload}
  
        case REQUEST.REQUESTED_DATA:
          return {...state, isLoading: true, error: ''}
        
        case REQUEST.REQUEST_FINISHED:
          return {...state, isLoading: false}

        case REQUEST.ADD_ERROR_MESSAGE:
          return {...state, error: action.payload}

        case REQUEST.CLEAR_ERROR_MESSAGE:
          return {...state, error: ''}
  
        default: return state
    }
};

export default themeReducer;