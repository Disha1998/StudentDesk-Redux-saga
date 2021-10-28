import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

async function Searchbox(key) {
    let result = await fetch("http://studentdesk.in/api/v1/text-search?apiname=textSearch&text=java"+key)
    // await result.json();
    console.log(result);
  return (
    <div>
      <input type="text" placeholder="Search by Author/Book name" onChange={(e)=>Searchbox(e.target.value)}/>
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>{" "}
    </div>
  );
}

export default Searchbox