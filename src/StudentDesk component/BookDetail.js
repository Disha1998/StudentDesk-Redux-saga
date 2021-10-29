import React from "react";
import Arrivel from "./Slider";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookDetail } from "../Redux/Action/Actions";
import { useParams } from "react-router";
import moment from "moment";
import { SocialIcon } from 'react-social-icons';
// import reactDom from "react-dom";

export default function BookDetail() {
  const books = useSelector(state => state.Books.BooksData);
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);
  const bookdetail = useSelector((state) => state.DetailBook.BooksDetailData);
  // console.log(bookdetail)
  const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchBookDetail(id));
  }, [dispatch, id]);

  console.log(bookdetail);
  console.log(loading);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {Object.keys(bookdetail).length === 0 && !loading ? (
        <p>Data is not available...</p>
      ) : (
        <>
          <div className="book-details">
            <div className="container" style={{ width: "80%" }}>
              <div className="book-box ">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-paddind margin-bottom">
                    <div className="img-bx">
                      <div className="main-img">
                        <img alt="" src={bookdetail.photo} />
                      </div>
                      <ul className="slide-img"></ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                    <div className="text-details">
                      <h3>{bookdetail.author}</h3>
                      <p> </p>
                      <ul className="sale-bx">
                        <li>On sell</li>
                        <li className="price-book-allign">
                          <span>
                            Price: ₹{bookdetail.price} |{" "}
                            <strike className="" style={{ color: "darkgrey" }}>
                              ₹{bookdetail.mrp}
                            </strike>
                          </span>
                        </li>
                        <li>Book condition:{bookdetail.condition}</li>
                      </ul>
                      <p></p>
                      <div className="post-details">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <div className="text-bx">
                            <span>Posted On:</span>
                            <h4>
                              {moment(bookdetail.created_at).format("D, MMM")}
                            </h4>
                          </div>
                          <div className="text-bx">
                            <span>Posted From: </span>
                            <h4>{bookdetail.college.college_name}</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="text-bx">
                              <span>Category: </span>
                              <h4>{bookdetail.category.category_name}</h4>
                            </div>
                            <div className="text-bx">
                              <span>Views on post</span>
                              <h4>{bookdetail.view_count}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* button box */}

                      <div className="btn-bx">
                        <button className="btnbx-1">Buy this Book</button>

                        <button
                          style={{ marginLeft: "60px" }}
                          className="btnbx-2"
                        >
                          {" "}
                          Get for Exchange
                        </button>
                      </div>
                    </div>
                    {/* </div>
                </div> */}
                    <div className="media-bx">
                      <h5>Share book via</h5>
                      <ul style={{}}>
                        <li> <SocialIcon url="https://facebook.com/jaketrent" /> </li>
                        <li> <SocialIcon url="https://twitter.com/jaketrent" /></li>
                        <li> <SocialIcon url="https://linkedin.com/jaketrent" /></li>
                        <li> <SocialIcon url="https://google.com/jaketrent" /></li>
                        <li> <SocialIcon url="https://whatsapp.com/jaketrent" /></li>
                       
                      </ul>
                    </div>
                  </div>

                  {/* Use card */}
               
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 no-paddind hidden-xs">
                    <div className="text-center user-card">
                      <div className="img-bx">
                        <img
                          src="http://images.studentdesk.in/img/icons/large/defaultuser.png"
                          alt="Jill thakkar"
                          className="img-responsive"
                        />
                      </div>
                      <h4 className=""> {bookdetail.user.name}</h4>
                      <h5>{bookdetail.user.city.city_name}</h5>
                      <div className="btn-bx">
                        <button>View All Books</button>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "#f3f3f3" }}>
            <div
              className="container"
              style={{
                background: "white",
                textAlign: "left",
                padding: "10px 10px 10px 10px",
                width: "80%",
              }}
            >
              <h3> Note From {bookdetail.user.name}</h3>
              <span>
                {bookdetail.post_note}
              </span>
            </div>
          </div>

          {/* Slider */}
          <div style={{ background: "#f3f3f3",  }}>
            <Arrivel title="Recent Books" booksData={books}/>
          </div>
        </>
      )}
     
    </div>
  );
}
