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

export const randomInteger = (max) => {
  let rand = Math.random() * (max + 1);
  return Math.floor(rand);
};
//
export const updateTheme = (date) => {
  return {
    type: REQUEST.UPDATE_THEME,
    payload: date,
  }
};

export const requestData = () => {
  return {
    type: REQUEST.REQUESTED_DATA
  }
};

export const requestDataFinished = () => {
  return {
    type: REQUEST.REQUEST_FINISHED
  }
};

export const addData = (data) => {
  return {
    type: REQUEST.ADD_NEW_POST,
    payload: data,
  }
};

export const removePost = (data) => {
  return {
    type: REQUEST.REMOVE_POST,
    payload: data,
  }
};

export const changePostStatus = (data) => {
  return {
    type: REQUEST.CHANGE_POST_STATUS,
    payload: data,
  }
};
//
export const showErrorMessage = (data) => {
  return {
    type: REQUEST.ADD_ERROR_MESSAGE,
    payload: data
  }
};
  
export const clearErrorMessage = () => {
  return {
    type: REQUEST.CLEAR_ERROR_MESSAGE
  }
};