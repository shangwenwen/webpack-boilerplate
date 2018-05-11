import { put } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('shang');
  yield put({ type: 'CLICK' });
}
