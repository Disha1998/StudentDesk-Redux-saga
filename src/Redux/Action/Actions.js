import * as type from '../types';

export function fetchBooks() {
  return { 
    type: type.FETCH_BOOKS_REQUEST,
  }
}

export function fetchBookDetail(id){
  return{
    type : type.FETCH_BOOK_DETAIL_REQUEST,
    payload : id
  }
}

// export function searchBook(id){
//   return{
//     type : type.FETCH_SEARCH_BOOK_REQUEST,
//     // payload : id
//   }
// }