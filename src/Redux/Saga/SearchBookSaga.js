import { call, put, takeLatest } from 'redux-saga/effects'
import * as type from '../types';



      function getApi(name) {
         return fetch(`http://studentdesk.in/api/v1/text-search?apiname=textSearch&text=${name}`, {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
       
             }
  }).then(response => response.json()).then((response) => response.data)
    .catch((error) => {throw error})
}

function* fetchBookSearchData(action) {
   try {
      const response = yield call(getApi,action.payload);
   
      yield put({type: type.FETCH_SEARCH_BOOK_SUCCESS, payload: response});
   } catch (e) {
      console.log(e);
      yield put({type: type.FETCH_SEARCH_BOOK_FAILURE, message: e.message});
   }
}

function* SearchBookSaga() {
   yield takeLatest(type.FETCH_SEARCH_BOOK_REQUEST, fetchBookSearchData)
}

export default SearchBookSaga;