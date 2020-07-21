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
    li{list-style-type: none;
        color: #fff;
        width: 100%;
        display: inline-block;
        font-size: 18px;
        padding: 5px 10px;}
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

.time.active a{
    background: #e7d3f6;
    color: #38373f;
    border: 1px solid #780ac4;
}
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
    grades:'',
	afternoon:[],
	evening:[],
	morning:[],
	childs:[],
	booking:'',
	phone:'',
	name:'',
	grade_id:'',
	school:'',
	pincode:'',
	fields: {},
    errors: {},
	slot:'',
	start:'',
	end:'',
	rsid:'',
	childid:'',
	autht:'',
	childt:'',
	animate: false,
	animates: false,
	startDate: new Date()
	}
	
	
	this.onChange = this.onChange.bind(this);
	this.show_overlay = this.show_overlay.bind(this);
	this.confirmbooking = this.confirmbooking.bind(this);
	this.switch_child = this.switch_child.bind(this);
	
 }
	 
	onChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;        
        this.setState({[e.target.name]: e.target.value});
    }
	
	
       componentDidMount() {
		
		AsyncStorage.getItem('childdata').then(data => {
			
			 var nameArr = data.split(',');
			 var phone = nameArr[0];
			 var name = nameArr[1];
			 var grade_id = nameArr[2];
			 var school = nameArr[3];
			 var pincode = nameArr[4];
			 this.setState({
					phone: phone
					});
			this.setState({
					name: name
					});	
             this.setState({
					grade_id: grade_id
					});	
             this.setState({
					school: school
					});
			this.setState({
					pincode: pincode
					});
					
 					
			 
		});
		
		AsyncStorage.getItem('auth_token').then(data => {
			
			 
			  this.setState({
					autht: data
					});
			
			  fetch('https://dev-api.getfreadom.com/api/user/v1/child/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
						'Authorization': 'JWT ' + data,
                    }
                }).then(res => res.json()).then(res => {
					var dd = JSON.stringify(res);
					//alert(dd);
                   console.log(dd);
				   this.setState({
					childs: res.result
					});
					
			}).catch(() => this.setState({ refreshing: false }));
		});
		window.scrollTo(0, 0)
	  } 
	  
	  confirmbooking(e,props){
		if(this.state.autht != 1){
		
		 if(this.state.childt){
				
		
        e.preventDefault();
          
           fetch(`https://dev-api.getfreadom.com/api/live-classes/v1/booking/`, {
            method: 'POST',
			headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + this.state.childt,
    },
            body: JSON.stringify({name:this.state.name,email:'hitesh@stones2milestones.com',otp:'9999',owner_event_start_at:this.state.start,owner_event_end_at:this.state.end,owner_booking_id:this.state.slot,resource_id:this.state.rsid,booking_type:'trial'}),
           }).then(res => res.json()).then(res => {
					var dd = JSON.stringify(res);
                    var dd = JSON.parse(JSON.stringify(res));
					if(dd.success === true) {
						this.setState({booking: dd.result})
					    AsyncStorage.setItem('owner_event_name', dd.result.owner_event_name);
					    AsyncStorage.setItem('booking_id', dd.result.booking_id);
					    AsyncStorage.setItem('booking_type', dd.result.booking_type);
					    AsyncStorage.setItem('booking_state', dd.result.booking_state);
					    AsyncStorage.setItem('owner_event_start_at', dd.result.owner_event_start_at);
				        AsyncStorage.setItem('owner_event_where', dd.result.owner_event_where);
				        window.location.href = '/booking-detail';
					 
					}else{
						alert(dd.error.error_message);
					}
				 }).catch(err => alert(err));
		    }else{
			   alert("Please select your child");
				   return false;
			   }	 
		}else{
			   
			  
			
			   e.preventDefault();
          
           fetch(`https://dev-api.getfreadom.com/api/live-classes/v1/booking-with-account/`, {
            method: 'POST',
			headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
            body: JSON.stringify({ contact_no: this.state.phone,name:this.state.name,email:'hitesh@stones2milestones.com',owner_event_start_at:this.state.start,owner_event_end_at:this.state.end,otp:'9999',grade:this.state.grade_id,owner_booking_id:this.state.slot,resource_id:this.state.rsid,booking_type:'trial'}),
           }).then(res => res.json()).then(res => {
					var dd = JSON.stringify(res);
                    var dd = JSON.parse(JSON.stringify(res));
					if(dd.success === true) {
				     this.setState({booking: dd.result})
				     AsyncStorage.setItem('owner_event_name', dd.result.owner_event_name);
					 AsyncStorage.setItem('booking_id', dd.result.booking_id);
					 AsyncStorage.setItem('booking_type', dd.result.booking_type);
					 AsyncStorage.setItem('booking_state', dd.result.booking_state);
					 AsyncStorage.setItem('owner_event_start_at', dd.result.owner_event_start_at);
				     AsyncStorage.setItem('owner_event_where', dd.result.owner_event_where);
				      window.location.href = '/booking-detail';
				    }else{
						alert(dd.error.error_message);
					}
				 }).catch(err => alert(err));
			
	    }		 
				 
	} 
	  
	  
	  
	 
     handleChange = date => {
		 
		 var slots = [];
		  var date = new Date(date);
          var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
          var day = ("0" + date.getDate()).slice(-2);
		  var ddd =  [date.getFullYear(), mnth, day].join("-");
		  
            fetch('https://dev-api.getfreadom.com/api/live-classes/v1/booking-slot/?date=' + ddd + '&class_type=trial&grade_id=' + this.state.grade_id + '', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(res => res.json()).then(res => {
					//console.log(res.result, "result")	 
		            this.setState({afternoon: [...res.result.afternoon]})
					this.setState({evening: [...res.result.evening]})
					this.setState({morning: [...res.result.morning]})
					slots = [...res.result.afternoon]
              }).catch(() => this.setState({ refreshing: false })); 
		this.setState({
          startDate: date
        });
		
		console.log("slot data",slots);
		
		//this.setState({ slot: slots });
		};
		
		show_overlay(slotid,start,end,rsid){
			alert(end);
			this.setState({
					slot: slotid
					});
			this.setState({
					start: start
					});
			this.setState({
					end: end
					});
			this.setState({
					rsid: rsid
					});
					
			 this.setState((prevState) => {
                 return { animate: !prevState.animate }
                });		
					
		  }
		  
		  
		  
		  
		switch_child(childid,grade_id){
			
			this.setState({
					grade_id: grade_id
					});	
			this.setState({
					childid: childid
					});
				this.setState((prevState) => {
                 return { animates: !prevState.animates }
                });		
			
			fetch(`https://dev-api.getfreadom.com/api/user/v1/child-selector/`, {
            method: 'POST',
			headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + this.state.autht,
    },
            body: JSON.stringify({ child_id: childid}),
           }).then(res => res.json()).then(res => {
					var dd = JSON.stringify(res);
                    var dd = JSON.parse(JSON.stringify(res));
					this.setState({
					childt: dd.result.auth_token
					});
					
			 }).catch(err => alert(err));
			
			
			
			
					
					
		
		  }  
		  
		  
	responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      }; 

    render() {
		let animationClasses = (this.state.animate ? ' active': '');
		let childClasses = (this.state.animates ? ' active': '');
		
		//sif (this.state.slot.length > 0) {console.log(1);}
		console.log(this.state.booking.booking_id);
     var d = new Date(this.state.startDate);
	 var ddd = new Date(d).toString();
	console.log(ddd);
	 
	
  const erows = this.state.evening.map(item => {
	  
	  var nameArr = item.start.split('+');
	  var start = nameArr[1];
	    return (<div className="Morning-shipt">
                                        <h4>Evening</h4>
                                        <div className={`time${animationClasses}`}>
                                        <Link onClick={() => this.show_overlay(item.booking_slot_id,item.start,item.end,item.resource_id)}>{start}</Link>
                                         </div>
                                   </div>)
	    });
	
		
	const mrows = this.state.morning.map(item => {
	  
	  var nameArr = item.start.split('+');
	  var start = nameArr[1];
	    return (<div className="Morning-shipt">
                                        <h4>Morning</h4>
                                        <div className={`time${animationClasses}`}>
                                        <Link onClick={() => this.show_overlay(item.booking_slot_id,item.start,item.end,item.resource_id)}>{start}</Link>
                                         </div>
                                   </div>)
	    });

    const arows = this.state.afternoon.map(item => {
	  
	  var nameArr = item.start.split('+');
	  var start = nameArr[1];
	    return (<div className="Morning-shipt">
                                        <h4>Afternoon</h4>
                                        <div className={`time${animationClasses}`}>
                                        <Link onClick={() => this.show_overlay(item.booking_slot_id,item.start,item.end,item.resource_id)} >{start}</Link>
                                         </div>
                                   </div>)
	    });		
		
	 
	 
	 
	 
	 
	 
	 
		
		
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
        <div className="main">
            <div className="row row_main">
             <div className="col-md-9">

                 <div className="calendar-api">
                       <div>    
                        <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        />
                        </div>

         
                        
                      <div className="moring-div row">
					  
					 
                            <div className="col-md-3">
                                  {mrows}
                            </div>
							
					         <div className="col-md-6">
                                {arows} 
                            </div>
							
					  
                            <div  className="col-md-3">
							{erows}
                            </div>
							
                      </div>
                 </div>
                    <div className="name-date">
                         <h3><span>{ddd}</span></h3>            
                     </div>
                 </div> 
             <div className="col-md-3">
			 <h3><span>Select child name</span></h3> 
                 <div className="right-framedate">
				 
                     <div className="right-framedate-middle">
                           <ul>
						   {this.state.childs && this.state.childs.length > 0 && this.state.childs.map((child) =>
                               <li > <a className={`rightddd${childClasses}`} onClick={() => this.switch_child(child.id,child.grade.id)}>{child.name}</a></li>
                            )}
                           </ul>
                           <div className="Add-more"><Link to="/add-child">Add More +</Link></div>
                     </div>
                 </div>
            </div> 
            </div>
            <div className="col-md-12">
                 <div className="bottom-main-section align-center">
                     <Link className="active" onClick={this.confirmbooking}>Confirm Booking</Link>
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