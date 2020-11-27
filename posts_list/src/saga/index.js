import { all, fork, put, call, delay, takeLatest, select} from 'redux-saga/effects';
import { REQUEST } from '../constants/constants';
import { requestData, requestDataError, requestDataSuccess, showErrorMessage, clearErrorMessage } from '../redux/actions';
import { getRequest } from '../api/getRequest';

const getTheme = state => state.posts;

function* requestWorker() {
  let request = yield select(getTheme);
  try {
    yield put(requestData())
    const response = yield call(() => getRequest(request));
    const payload = prepareData(response);
    yield put(requestDataSuccess(payload))
  } catch (e) {
    yield put(requestDataError())
    yield put(showErrorMessage('Что-то пошло не так'))
    yield delay(5000)
    yield put(clearErrorMessage())
  }
}

function* requestWatcher() {
  yield takeLatest(REQUEST.UPDATE_THEME, requestWorker)
}

export function* rootSaga() {
  yield all ([
    fork(requestWatcher)
  ])
}

const prepareData = (response) => {
  return response;
}