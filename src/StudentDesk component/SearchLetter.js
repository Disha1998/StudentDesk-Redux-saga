import React from 'react';
import {Link} from "react-router-dom" 

export default function SearchLetter(){
    return(
        <div className="SearchLetter">
            <ul>
                <li>
                    <Link to="/Books">Books | </Link>
                </li>
                <li>Textbook/Study Notes | </li>
                <li>Magazines | </li>
                <li>Book set</li>
            </ul>
        </div>
    )
}