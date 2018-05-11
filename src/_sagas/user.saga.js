import { takeEvery, delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

export function* userSaga(action) {
  try {
    console.log('saga');
  } catch (error) {
    console.log('error', error);
  }
}

export function* watchUserSaga() {
  yield* takeEvery(userConstants.LOGIN_REQUEST, userSaga);
}
