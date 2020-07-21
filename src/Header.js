import React, { Component,Fragment  } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Parser from 'html-react-parser';
import MobileMenu from './component/MobileMenu';
import { AsyncStorage } from 'AsyncStorage';
import { onSignIn, setStorage } from "./auth";

const HeaderTop = styled.div`
padding-top: 15px;
padding-bottom: 15px;
.row{align-items: center;}
.menubar{
    
    ul{list-style-type: none;padding: 0px;    margin-bottom: 0px;}
    li{display: inline-block;}
    a{  
        color: #000;
    padding: 15px 25px;
    display: inline-block;
    }
    a:hover{
        text-decoration: none;
        font-weight: bold;
    }
}
.header-right{
    ul{padding: 0px;
        list-style-type: none; margin-bottom: 0px;}
    li{display: inline-block;
        padding-right: 12px;
        padding-left: 12px;
        border-right: 1px solid #00000036;}
        li:last-child{border-right: 0px solid #00000036;}
    a{    background: #7927c2;
        color: #fff;}
    a:hover{ text-decoration: none;}
    li:nth-child(1) a{padding: 8px 13px;
        
        display: inline-block;
        border-radius: 50%;}
    li:nth-child(2) a{display: inline-block;
        padding: 10px 30px;
        border-radius: 30px;}
}
.Header-logo img{    width: 70%;}
`;

const KEY = "rickyfiguresitouts";
class Header extends Component {
	constructor(props) {
  super(props);
  this.state = {
    auth:'',
	}
	
	this.componentDidMount = this.componentDidMount.bind(this);
	this.signout = this.signout.bind(this);
   }
	
	
	
	 componentDidMount() {
		AsyncStorage.getItem('auth_token').then(data => { 
		this.setState({
					auth: data
					});
		});
		window.scrollTo(0, 0)
	  }

      signout(){
		 AsyncStorage.setItem('auth_token', 1);
		 this.setState({
					auth: ''
					});
		window.location.href = 'http://localhost:3000/';
		}
	

	  
	
    render() {
		
		var auth = this.state.auth;
         console.log(auth);
	  if(auth != 1){
	     var thisIsMyCopy = (
		  <li><Link onClick={this.signout} >Log Out</Link></li>
          
          )
	    }else{
		    var thisIsMyCopy = ( 
		   <li><Link to="">Sign in</Link></li>
              )  
	  }
		
		
		
		
        return (
            <HeaderTop>
               <div className="container">
               
                   <div className="row">
                         <div className="col-md-3">
                             <div className="Header-logo">
                              <Link to="/"> 
                             <img src={process.env.PUBLIC_URL+"img/Logo.png"} alt={"logo"}/>
                             </Link> 
                             </div>
                         </div>
                         <div className="col-md-6">
                            <div className="Mobile_menu">
                            <MobileMenu />
                            </div>
                             <div className="menubar desktop">
                                  <ul>
                                      <li><Link to="">Home</Link></li>
                                      <li><Link to="">Feed</Link></li>
                                      <li><Link to="">Stories</Link></li>
                                      <li><Link to="">News</Link></li>
                                      <li><Link to="">Activity</Link></li>
                                  </ul>
                             </div>
                         </div>
                         <div className="col-md-3">
                             <div className="header-right">
                                 <ul>
                                     <li><Link to=""><i class="fa fa-search" aria-hidden="true"></i></Link></li>
                                    {thisIsMyCopy}
                                 </ul>
                             </div>
                         </div>
                   </div>
                </div> 
            </HeaderTop>
        );
    }
}

export default Header;