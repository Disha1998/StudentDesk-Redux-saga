import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./StudentDesk component/Header";
import Booklisting from "./StudentDesk component/BookListing";
import Home from "./StudentDesk component/Home";
import Footer from "./StudentDesk component/Footer";
import BookDetail from "./StudentDesk component/BookDetail";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {/* <Route path="/Login" exact>
          <Login />
        </Route> */}

        <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
          <Route path="/Books" exact>
             <Booklisting/>
          </Route>
          <Route path="/BookDetail/:id" exact>
          <BookDetail />
        </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
