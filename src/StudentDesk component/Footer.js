import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
// import { TiSocialFacebookCircular } from "react-icons/fa";
// import { FaFacebook } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col t1">
            <h4>Old Books in popular cities</h4>
            <div className="line1"></div>
          </div>
          <div className="col t2">
            <h4>Quick Links</h4>
            <div className="line2"></div>
          </div>
          <div className="col t3">
            <h4>Keep Connected</h4>
            <div className="line3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col f-one">
            <ul className="u1">
              <li>Old Books in Pune</li>
              <li>Old Books in Bangalore</li>
              <li>Old Books in Ahmedabad</li>
              <li>Old Books in Hyderabad</li>
            </ul>
            <ul>
              <li>Old Books in Pune</li>
              <li>Old Books in Bangalore</li>
              <li>Old Books in Ahmedabad</li>
              <li>Old Books in Hyderabad</li>
            </ul>
          </div>

          <div className="col f-two">
            <ul>
              <li>Old Books in Pune</li>
              <li>Old Books in Bangalore</li>
              <li>Old Books in Ahmedabad</li>
              <li>Old Books in Hyderabad</li>
            </ul>
          </div>
          <div className="col f-three">
            <ul>
              <li>Old Books in Pune</li>
              <li>Old Books in Bangalore</li>
              <li>Old Books in Ahmedabad</li>
              <li>Old Books in Hyderabad</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-l"></div>
      <div className="copyright">
        <div className="col-6">
          © Copyright 2020. All Rights Reserved. Product of CodeCrunch Techlabs
          Pvt. Ltd.
        </div>       
       
            <FontAwesomeIcon icon={faUniversity} />
            {/* <FontAwesomeIcon icon={FaFacebook} /> */}
        
      </div>
      </div>
    
    
  );
}
