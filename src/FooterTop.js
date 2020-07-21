import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const FooterCont = styled.div`
.row{align-items: center;width:98%; margin:0 auto;}
        background: url(https://ik.imagekit.io/deepak/footer-top_qsQxTxbPi.jpg);
        background-size: cover;
        padding-top: 3%;
        padding-bottom: 3%;
        .Footer-top-right{
            text-align:right;
        }
        .Footer-top-right a{
        background: #fff;
        color: #ee608e;
        padding: 8px 15px;
        border-radius: 20px;
        display: inline-block;
       }
        .Footer-top-right a:hover{
            text-decoration: none;
        }
        .Footer-top-left{
            color:#fff;
            h3{
                line-height: 40px;
                font-size: 24px;
            }
            a{ 
                color:#fff;
                text-decoration: underline;  
            }
        }
`;

class FooterTop extends Component {
    render() {
        return (
            <FooterCont>
            <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <div className="Footer-top-left">
                      <h3>
                      Download our application<br />
available on iPhone and android</h3>
                  </div>
              </div>
              <div className="col-md-6">
              <div className="Footer-top-right">
                   <Link to="">Get Started Now</Link>
              </div>
              </div>
            </div>
            </div>
            </FooterCont>
        );
    }
}

export default FooterTop;