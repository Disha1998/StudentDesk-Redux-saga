
import * as type from '../types';

const initialState = {
  BookSearch: {},
  loading : false,
  error : null,

}

export default function SearchBook(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_SEARCH_BOOK_REQUEST:
      return {
        ...state,
       loading : true,
       BookSearch:{}
      }
      case type.FETCH_SEARCH_BOOK_SUCCESS:
        return{
          ...state,
          loading:false,
          BookSearch:action.payload,
        }
        case type.FETCH_SEARCH_BOOK_FAILURE:
          return{
            ...state,
            loading:false,
            // error:action.message,
            BookSearch:{}
          }
    default:
      return state
  }
}

 