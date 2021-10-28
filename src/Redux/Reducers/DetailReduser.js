
import * as type from '../types';

const initialState = {
  BooksDetailData: {},
  loading : false,
  error : null,

}

export default function DetailBook(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_BOOK_DETAIL_REQUEST:
      return {
        ...state,
       loading : true,
       BooksDetailData:{}
      }
      case type.FETCH_BOOK_DETAIL_SUCCESS:
        return{
          ...state,
          loading:false,
          BooksDetailData:action.payload,
        }
        case type.FETCH_BOOK_DETAIL_FAILURE:
          return{
            ...state,
            loading:false,
            // error:action.message,
            BooksDetailData:{}
          }
    default:
      return state
  }
}

 