import { REQUEST } from '../constants/constants';

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
}; 

export const clearLocalStorage = () => {
  window.localStorage.clear();
};
//
export const updateTheme = (date) => {
  return {
    type: REQUEST.UPDATE_THEME,
    payload: date,
  }
}

export const requestData = () => {
  return {
    type: REQUEST.REQUESTED_DATA
  }
}

export const requestDataSuccess = (data) => {
  return {
    type: REQUEST.REQUEST_DATA_SUCCEEDED,
    payload: data,
  }
}

export const requestDataError = (data) => {
  return {
    type: REQUEST.REQUEST_DATA_FAILED,
    payload: data,
  }
}
//
export const showErrorMessage = (data) => {
    return {
      type: REQUEST.ADD_ERROR_MESSAGE,
      payload: data
    }
  }
  
  export const clearErrorMessage = () => {
    return {
      type: REQUEST.CLEAR_ERROR_MESSAGE
    }
  }