
import * as type from '../types';

const initialState = {
  BookSearchData: [],
  loading : false,
  error : null,

}

export default function SearchBook(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_SEARCH_BOOK_REQUEST:
      return {
        ...state,
       loading : true,
       BookSearchData:[]
      }
      case type.FETCH_SEARCH_BOOK_SUCCESS:
        return{
          ...state,
          loading:false,
          BookSearchData:action.payload,
        }
        case type.FETCH_SEARCH_BOOK_FAILURE:
          return{
            ...state,
            loading:false,
            // error:action.message,
            BookSearchData:[]
          }
    default:
      return state
  }
}

 