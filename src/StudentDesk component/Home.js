import React from 'react'
import InfoBox from "./InfoBox";
import Arrivels from "./Slider";
import Workbox from "./Workbox";
import News from "./News";
import BannerBox from './BannerBox';
// import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import users from "../Redux/Reducers/ListReducer";
import { fetchBooks } from "../Redux/Action/Actions";
export default function Home(){
    const books = useSelector(state => state.Books.BooksData);
    // console.log(books)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])
    return(
        <div>
            {/* <h1>This is home page</h1> */}
            <BannerBox />
            <InfoBox />
      <Arrivels title="New Arrivals" booksData={books}/>
      <Workbox />
      <News />
      
        </div>

    )
}