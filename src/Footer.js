import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const FooterMain = styled.div`
h3{
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 35px;
}
.FooterMain{
    background: #9555ff;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    padding-top: 50px;
    padding-bottom: 25px;
}
.copyright{
    text-align: center;
    border-top: 1px solid #ffffff52;
    width: 97%;
    margin: 0 auto;
    padding-top: 30px;
}
.FooterLogo-left{
    p{  
        line-height: 24px;
        padding-left: 10px;}
     }
.useful{
   ul{    padding: 0px;
    list-style-type: none;
}
ul li a{    color: #fff;
    margin-bottom: 25px;
    display: inline-block;
    width: 100%;}
ul li a:hover{
    text-decoration: none;
}
}
.find-us{
    p a{
        text-align: center;
        display: inline-block;
        height: 35px;
        background: #fff;
        margin-right: 10px;
        border-radius: 50%;
        width: 35px;
        line-height: 35px;
        color: #ff5259;
    }
    p a:hover {
        transform: translateY(-5px);
        transition: 0.3s;
      }
}

.copyright p{
    font-size: 16px;
}
`;

class Footer extends Component {
    render() {
        return (
           <FooterMain>
            <div className="FooterMain">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 FooterLogo-left">
                    <img src={process.env.PUBLIC_URL+"img/FooterLogo.png"} alt={"logo"}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="useful">
                            <h3>Useful</h3>
                            <div className="row">
                            <div className="col-md-6">
                            <ul>
                                <li><Link to="">About</Link></li>
                                <li><Link to="">Our Services</Link></li>
                                <li><Link to="">Help Center</Link></li>
                                <li><Link to="">Privacy Policy</Link></li>
                            </ul>
                            </div> 
                            <div className="col-md-6">
                            <ul>
                                <li><Link to="">Recent Posts</Link></li>
                                <li><Link to="">Case Studies</Link></li>
                                <li><Link to="">Testimonials</Link></li>
                                <li><Link to="">Testimonials</Link></li>
                            </ul>
                            </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="touch">
                            <h3>Get In Touch!</h3>
                            <p>Email: info@domain.com</p>
                            <p>Phone: +91 9292 929239</p>
                            <p>Address: F-1, Indira Place <br/>City, State 2929290</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="find-us">
                            <h3>Find Us</h3>
                            <p>Lorem ipsum retro slow ipsum upsinte ops lorem ups.</p>
                            <p>
                            <Link to=""><i class="fa fa-facebook"></i></Link>
                            <Link to=""><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="copyright">
                     <p>Copyright   2020   All rights reserved.</p>
                </div>
                </div>
            </div>
            </FooterMain>
        );
    }
}

export default Footer;