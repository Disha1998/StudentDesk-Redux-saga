import { call, put, takeLatest } from 'redux-saga/effects'
import * as type from '../types';

const apiUrl = `http://studentdesk.in/api/v1/newarrivals?&apiname=newArrivals`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json()).then((response) => response.data)
    .catch((error) => {throw error})
}

function* fetchBooksData(action) {
   try {
      const response = yield call(getApi);
      yield put({type: type.FETCH_BOOKS_SUCCESS, payload: response});
   } catch (e) {
      yield put({type: type.FETCH_BOOKS_FAILURE, message: e.message});
   }
}

function* bookSaga() {
   yield takeLatest(type.FETCH_BOOKS_REQUEST, fetchBooksData);
}

export default bookSaga;