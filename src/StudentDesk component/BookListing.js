import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import users from "../Redux/Reducers/ListReducer";
import { fetchBooks } from "../Redux/Action/Actions";
import Book from "./Book";

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.Books.BooksData);
  // console.log(books)
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  // console.log(books);

  return (
    <div className="container">
      {books.length === 0 && !loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {books.length > 0 &&
        books.map((data) => <Book key={data.id} book={data} />)}
    </div>
  );
}
