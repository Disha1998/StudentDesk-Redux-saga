import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function Book(props) {
  return (
    <div>
      <Link to= {`/BookDetail/${props.book.id}`} style={{textDecoration:"none", color:"#666666"}}>
      <div className="container" style={{ width: "85%" }}>
        <div className="border-box">
          <div className="row">
            
              <div className="col d-flex">
                <div className="img-list">
                  <img
                    className="img-responsive"
                    alt=""
                    src={props.book.photo}
                  ></img>
                </div>
                <div className="detail-bx">
                  <ul>
                    <li>
                      <h3 className="title">{props.book.name}</h3>
                    </li>
                    <li>Author: {props.book.author}</li>
                    <li>City: {props.book.city.city_name}</li>
                    <li>Posted by: {props.book.user.name}</li>
                    <div className="List-btn">
                      <button>Buy Book</button>
                      <button>Exchange Book</button>
                    </div>
                  </ul>
                </div>
              </div>
              <div className=" col-xs-12 col-md-6 postedby">
                <div className="row">
                  <div className="postedBy">Price :{props.book.price}$</div>

                  <span className="postedon">
                    {" "}
                    Posted On:{moment(props.book.created_at).format("D, MMM")}
                  </span>
                </div>
              </div>
          
          </div>
       
        </div>
        
       
      </div>
         </Link>
       
    </div>
  );
}

export default Book;
