import { combineReducers } from 'redux';
import Books from './ListReducer';
import DetailBook from './DetailReduser';
import SearchBook from './SearchBookReducer'

const rootReducer = combineReducers({
  Books,
  DetailBook,
  SearchBook,
});

export default rootReducer;