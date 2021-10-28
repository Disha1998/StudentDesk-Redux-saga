import { call, put, takeLatest } from 'redux-saga/effects'
import * as type from '../types';


function getApi(id) {
  return fetch(`http://studentdesk.in/api/v1/book-details/${id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json()).then((response) => response.data[0])
    .catch((error) => {throw error})
}

function* fetchBookDetailsData(action) {
   try {
      const response = yield call(getApi,action.payload);
   
      yield put({type: type.FETCH_BOOK_DETAIL_SUCCESS, payload: response});
   } catch (e) {
      console.log(e);
      yield put({type: type.FETCH_BOOK_DETAIL_FAILURE, message: e.message});
   }
}

function* bookDetailSaga() {
   yield takeLatest(type.FETCH_BOOK_DETAIL_REQUEST, fetchBookDetailsData)
}

export default bookDetailSaga;