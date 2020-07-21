import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import FooterTop from "./FooterTop";
import Home from "./Home";
import AddChild from "./component/AddChild";
import Booking from "./component/Booking";
import BookingDetail from "./component/BookingDetail";
import TopBanner from "./component/TopBanner"; 


export default class App extends Component {
	
  render() {
    return ( 
      
      <div>
          <Router>
             <Header />
             <TopBanner/>
             <Route exact path="/" component={Home} />
             <Route exact path="/add-child" component={AddChild} />
             <Route exact path="/booking" component={Booking} /> 
             <Route exact path="/booking-detail" component={BookingDetail} /> 
             <FooterTop />
             <Footer />

          </Router>
      </div>
    );
  }
}