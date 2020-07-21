import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route ,Link} from 'react-router-dom';
import { AsyncStorage } from 'AsyncStorage';
import styled from 'styled-components'
import AddChild from "../component/AddChild";

import { onSignIn, setStorage } from "../auth";

const Mobile = styled.div`
position: fixed;
top: 0px;
left: 0px;
width: 100%;
background: #0000006b;
height: 100%;
z-index: 9999;
.mobile-main-frame.row{
    width: 750px;
    position: relative;
    margin: 0 auto;
    margin-top:5%;   
}
.close-icon{
    position: absolute;
    right: -6px;
    z-index: 9999;
    top: -15px;
    opacity: 1;
    a{
    color: #000;
    font-size: 20px;
    background: #fff;
    border-radius: 20px;
    padding: 5px 10px;
    }
    a:hover{
        background:#a363ff;
        color:#fff;
    }
}
.col-md-5{    
    background: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.mobile-main-frame.row .col-md-7{
    background: url(https://ik.imagekit.io/deepak/otp-back_QUFO9IiXi.jpg);  
    background-size: cover;
}
.col-md-7{    
    align-items: center;
    display: flex; 
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.Mobile{    text-align: center;
    width: 100%;}
    .form-control{
        display: inline-block;
        width: 60%;
        background: transparent;
        border: 0px;
        color:#fff;
        @media (max-width: 767px) and (min-width: 120px){
            width: 60%;
        }
    }
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
    -moz-appearance: textfield;
  }
  .phone-from{
    background: #ba82ff;
    text-align:left;
    border-radius: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
    /* padding: 6px 10px; */
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    @media (max-width: 767px) and (min-width: 120px){
        width: 100%;
    }
}
  .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #fff;
  }
  .form-control::-moz-placeholder { /* Firefox 19+ */
    color: #fff;
  }
  .form-control:-ms-input-placeholder { /* IE 10+ */
    color: #fff;
  }
  .form-control:-moz-placeholder { /* Firefox 18- */
    color: #fff;
  }
  .right-img{
      padding-top:60px;
      padding-bottom:60px;
  }
  .form-control:focus { 
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none; 
}
  h3{
    
        font-size: 25px;
        font-weight: normal;
        color: #fff;
        line-height: 35px;}
        .otpm-bot{
            float: right;
            margin-right: 10px;
            margin-top: 3px;
    background: #ee608d;
    color: #fff;
    font-weight: normal;
    border: 0px;
    border-radius: 20px;
    padding: 5px 20px;
    display: inline-block;
    font-size: 16px;
    a{color:#fff ;   text-decoration: none !important;;}
}
.Mobile{}
.Otp-middle{text-align: center;
    width: 100%;display:none;}
.Otp-middle p{
    font-size: 17px;
    color:#fff;
    a{
        color:#fff;
    }
}
.Otp-middle{color:#fff;font-size: 22px;}

@media (max-width: 767px) and (min-width: 120px){
    overflow: auto;
    padding-top: 5%;
    padding-bottom: 5%;
}
`;
const KEY = "rickyfiguresitouts";
class Otp extends Component {
	
    constructor(props)
    {
        super(props);
        this.state={
            phone:'',
			otp:'',
            show:true,
            fields: {},
            errors: {}
        }
        this.getOtp = this.getOtp.bind(this);
        this.matchOtp = this.matchOtp.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;        
        this.setState({[e.target.name]: e.target.value});
    }


    getOtp(e,props){
		
        e.preventDefault();
        if(this.handleValidation()){   
           fetch(`https://dev-api.getfreadom.com/api/user/v1/otp/`, {
            method: 'POST',
			headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
            body: JSON.stringify({ contact_no: this.state.phone, action: 'login',user_type:'parent',country_code:91}),
           }).then(res => res.json()).then(res => {
					var dd = JSON.stringify(res);
                    var dd = JSON.parse(JSON.stringify(res));
				 if(dd.success === false) {
					
					setStorage(true)
					AsyncStorage.setItem(KEY, "true");
                    AsyncStorage.setItem('userId', this.state.phone);
					
					window.location.href = '/add-child';
				}
				
				 if(dd.success === true) {
					
					setStorage(true)
					
                    AsyncStorage.setItem('otpno', this.state.phone);
					
					document.getElementById("firstForm").style.display  = "none";
                    document.getElementById("secondForm").style.display  = "block";
				}
				
				}).catch(err => alert(err));
		   
		  }      
    }

	matchOtp(e){
		
		AsyncStorage.getItem('otpno').then(data => {
			
		 fetch(`https://dev-api.getfreadom.com/api/user/v1/otp/`, {
            method: 'PUT',
			headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
            body: JSON.stringify({contact_no: data,action: 'login',otp:this.state.otp,country_code:91,device_type:'web',user_type:'parent'}),
           }).then(res => res.json()).then(res => {
					//var dd = JSON.stringify(res);
                    var dd = JSON.parse(JSON.stringify(res));
					console.log(dd);
				 if(dd.success === true) {
					
					setStorage(true)
					AsyncStorage.setItem(KEY, "true");
                    AsyncStorage.setItem('userId', this.state.phone);
					AsyncStorage.setItem('auth_token', dd.result.auth_token);
					window.location.href = '/add-child';
				}
				
				 if(dd.success === false) {
					
					
					e.preventDefault();		
		            document.getElementById("secondForm").innerHTML = 'You entered wrong OTP';
		            document.getElementById("secondForm").style.display  = "show";
				}
				
				}).catch(err => alert(err));	
			
		});
		
		
		   
    }
	

	handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //phone
        
        console.log(fields);
        
        
        if(!fields["phone"]){
           formIsValid = false;
           errors["phone"] = "Phone field is required.";
        }

        if(typeof fields["phone"] !== "undefined"){
           if(!fields["phone"].match(/^[0-9]+$/)){
              formIsValid = false;
              errors["phone"] = "Please enter valid phone";
           }        
        }
        console.log(errors);
        this.setState({errors: errors});
        return formIsValid;
   }

    render() {
        return (
            <>
             {
                           this.state.show ?
            <Mobile>
               
                <div className="container">
                <div className="row--">
                        <div className="mobile-main-frame row">
                           
                            {/* <button className="close close-icon" onClick={()=>{this.setState({show:false})}}> 
                                 <Link to=""><i class="fa fa-times" aria-hidden="true"></i></Link>
                            </button>*/}
                           
                            <div className="col-md-7">
                               <div className="Mobile" id="firstForm">
                               <h3>Enter Your phone <br/> Number below </h3>
                                <div className="phone-from">
                                <input className="form-control" name="phone" id="phone" type="number" placeholder="Enter Mobile Number..." onChange={this.onChange} maxLength={10} />
                                
                                <button className="otpm-bot" onClick={this.getOtp}>Get Otp</button> 
                                
                                </div>
                                <span style={{color: "white"}}>{this.state.errors["phone"]}</span>
                               </div>
                               <div className="Otp-middle" id="secondForm">
                               <h3>Enter OTP </h3>
                                <div className="phone-from">
                                <input className="form-control" name="otp" id="otp" type="number" onChange={this.onChange} placeholder="Enter OTP..."  maxLength={4} />
                                <button className="otpm-bot" onClick={this.matchOtp}>
                                   <Link to="">Veirfy</Link>
                                </button> 
                                </div>
                                <p>Send Again? <Link to=""> Click here </Link></p>
                               </div>
                            </div>
                            <div className="col-md-5">
                                <div className="right-img">
                                     <img className="img-responsive" src={process.env.PUBLIC_URL+"img/otp.png"} alt={"logo"}/>
                                </div>
                            </div>
                        </div>
                </div>
               </div> 
              
            </Mobile>
             :null
            }
            </>
        );
    }
}

export default Otp;