import React, { useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { fetchsearchBook } from "../Redux/Action/Actions";
// import { useState } from "react";

export default function SearchBox() {
  const booksear = useSelector((state) => state.SearchBook.BookSearchData);
  console.log(booksear);

  const dispatch = useDispatch();

  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   setData(booksear);
  // }, [booksear]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Author/Book name"
        onChange={(e) => {
          dispatch(fetchsearchBook(e.target.value));
        }}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>

      {
        // <div>
        //   {data.length > 0 &&
        //     data.map((result, i) => {
        //       return <div key={i}>{result.name}</div>;
        //     })}
        // </div>           //--------1st Method of listing search data using useState,useEffect-------
        
        <div id='search-box dropdown-menu container' style={{maxHeight:"180px",overflowY:'auto',width:'90%'}}>
          {
            booksear.map((result,i)=>{
              return <div key={i}>{result.name}</div>
            })
          }
        </div>


      }
    </div>
  );
}
