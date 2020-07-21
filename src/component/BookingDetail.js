import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Slider from "react-slick";
import { AsyncStorage } from 'AsyncStorage';
import {  setStorage } from "../auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BookingSection = styled.div`
  padding-bottom: 70px;
  padding-top: 60px;
  
  .slick-slide, .slick-slide *{ outline: none !important; }
.right-framedate{
    background: #a363ff;
    color: #fff; 
    padding: 10px 10px;
    height:100%;
}
.right-framedate-middle{
    background: #9546ea;
    height: 100%;
    position: relative;
    ul{padding: 0px;}
    li{list-style-type: none;}
    a{  
        color: #fff;
        width: 100%;
        display: inline-block;
        font-size: 18px;
        padding: 5px 10px;
    }
    a:hover{ text-decoration: none;}
    .Add-more{    text-align: center;
        padding-bottom: 10px;
        position: absolute;
        width: 100%;
        bottom: 5px;}
    li a.active{background:#fff; color:#9546ea;}
}
.Zoom-link{text-align: center;
    margin-top: 15px;}
.Zoom-link h4{color:#a8a8a8;font-size: 23px;}
.Zoom-link h4 a{color:#3a99c6;}
.name-date{
    h3{color: #7d12c6;
        font-size: 26px; 
        margin-bottom:35px;
    }
    span{display: block;
        font-weight: normal;}
}
.row_main{box-shadow: 0px 0px 0px 0px #cccccc2e;margin: 5px;border: 5px solid #cccccc0d;}   
.left-main{padding: 10px 10px;}
.bottom-main-section{text-align:right;    margin-bottom: 50px;
    margin-top: 50px;}
.bottom-main-section a{
    border:1px solid #a363ff;
    color:#a363ff;
    font-size: 24px;
    border-radius: 5px;
    padding: 10px 34px;
    text-decoration: none !important;  
    margin-right: 40px;
}
.bottom-main-section a.active{background:#a363ff;    color: #fff;}
.bottom-main-section a:hover{}
.slick-dots li.slick-active button:before {
    opacity: .75;
    color: #872fd4;
    font-size: 18px;
}
.slick-dots li button:before{
    color: #cfacee;
    font-size: 18px;
}
.bottom-main-section.align-center{text-align:center;}
.calendar-api{
     
}
.moring-div{
    margin-bottom: 60px;
    margin-top: 20px;

}
.Morning-shipt h4{
    font-size: 20px;
    padding-left: 10px;
}
.time{}
.time a{
    margin-right: 10px;
    font-weight: bold;
    color: #000;
    -webkit-text-decoration: none !important;
    text-decoration: none !important;
    font-size: 18px;
    padding: 7px 15px;
    display: inline-block;
    border: 1px solid #000;
    border-radius: 30px;
}
.react-datepicker__input-container input{
    border: 2px solid #831dc9;
    border-radius: 15px;
    padding: 5px 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    background: #e7d4f5;
    color: #831dc9;
}
`;

const DateCal = styled.div`
border-top: 1px solid #9546ea;
border-bottom: 1px solid #9546ea;
padding-top: 10px;
padding-bottom: 10px;
margin-top: 5px;
    margin-bottom: 30px;
.date-time{
     h4{    font-size: 14px;
        text-align: center;
        margin-bottom: 0px;
    }
     p{text-align: center;
        margin-bottom: 0px;
    }
}
.react-multiple-carousel__arrow{
    background: transparent;
}
.react-multiple-carousel__arrow::before{
    color:#000;
}
.react-multi-carousel-list{
    width: 98%;
    margin: 0 auto;
}
.react-multiple-carousel__arrow--right {
    right: -15px;
}
.react-multiple-carousel__arrow--left {
    left: -15px;
}

.date-time.active{
    h4{color:#9546ea;}
    p{color:#9546ea;}
}

`;

class Booking extends Component {
constructor(props) {
  super(props);
  this.state = {
    
	owner_event_name:'',
	booking_id:'',
	booking_type:'',
	booking_state:'',
	owner_event_start_at:'',
	owner_event_where:''
	}
	
	
	
	
 }
	 
	onChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;        
        this.setState({[e.target.name]: e.target.value});
    }
	
	
       componentDidMount() {
		
		AsyncStorage.getItem('owner_event_name').then(data => {
			this.setState({
					owner_event_name: data
			});
		});
		AsyncStorage.getItem('booking_id').then(data => {
			this.setState({
					booking_id: data
			});
		});
		AsyncStorage.getItem('booking_type').then(data => {
			this.setState({
					booking_type: data
			});
		});
		AsyncStorage.getItem('booking_state').then(data => {
		this.setState({
					booking_state: data
			});
		});
		AsyncStorage.getItem('owner_event_start_at').then(data => {
			this.setState({
					owner_event_start_at: data
			});
		});
		AsyncStorage.getItem('owner_event_where').then(data => {
			this.setState({
					owner_event_where: data
			});
		});
		
		
		window.scrollTo(0, 0)
	  } 
	  
	

    render() {
	
		
	 
	 
	   var settings = {
            dots: true,
            infinite: true,
            autoplaySpeed:9000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <BookingSection>
               <div className="container">
               <Slider {...settings}>
        
        <div>  
        <div className="row row_main">
             <div className="col-md-12">
                    <div className="left-main">
                        <div className="row">
                             <div className="col-md-6">
                                 <div className="name-date">
                                     <h3>BOOKING FOR-  {this.state.owner_event_name}<span>BOOKING ID - {this.state.booking_id}</span></h3>
                                     
                                 </div>
                                
                             </div>
                             <div className="col-md-6">
                             <div className="name-date right">
                                     <h3>TRIAL CLASS DETAILS<span>{this.state.booking_type},{this.state.booking_state}</span></h3>
                                     <h3>Time<span>{this.state.owner_event_start_at}</span></h3>
                                 </div>
                             </div>
                        </div>
                        <div className="Zoom-link">
                            <h4>Class link</h4>
                            <h4><Link to="">{this.state.owner_event_where}</Link></h4>
                        </div>
                    </div>
                 </div> 
           
           
            </div>
            <div className="col-md-12">
                 <div className="bottom-main-section">
                     <Link className="active" to="#">Done</Link>  
                     <Link to="/booking">Reschedule</Link>
                 </div>
            </div>
        </div>
       
      </Slider>
                </div>
            </BookingSection>
        );
    }
}

export default Booking;