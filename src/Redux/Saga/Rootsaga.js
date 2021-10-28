import { all } from 'redux-saga/effects'
import bookSaga from './Listsaga'
import bookDetailSaga from './DetailBooksaga'
// import SearchBookSaga from './SearchBookSaga'

export default function* rootSaga() {
  yield all([
    bookSaga(),
    bookDetailSaga(),
    // SearchBookSaga()
  ])
}