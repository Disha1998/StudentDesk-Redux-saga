import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function SearchBox(){
    return(
        <div>
             <input type="text" placeholder="Search by Author/Book name" />
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
        </div>
    )
}