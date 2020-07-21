import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AsyncStorage } from 'AsyncStorage';
import {  setStorage,setStorages} from "../auth";
import styled from 'styled-components'


const ChildMain = styled.div`
margin-top: 5%;
margin-bottom: 5%;

   .Left-child{
       h3{
        
        position: relative;           
        font-weight: normal;
        color: #872fd4;
        font-size: 34px;
        line-height: 34px;
        span{    display: block;
            font-size: 16px;
            padding-left: 20px;
        }
        span:before {
            right: 92%;
            content: "";
            position: absolute;
            top: 23%;
            border: 1px solid #872fd4;
            width: 3%;
            margin: 0 20px;
        }
       }
   }
   .from-group-main{margin-top:40px;
   input{background: #eff6fe;
    border: 0px;
    border-radius: 20px;
    padding: 5px 20px;
    height: 45px;}
    select{background: #eff6fe;
        border: 0px;
        border-radius: 20px;
        padding: 5px 20px;
        height: 45px;}
}
.form-group{
    
    margin-bottom: 20px;

}
.form-group a{

}
.form-group .btn{
    padding: 10px 25px;
    border-radius: 12px;
    margin-top: 3%;
}
.form-group .btn:nth-child(1){
    background: #ee608d;
    border: 0px;
    color: #fff;
    margin-right: 10px;
}
.form-group .btn:nth-child(2){
    background: #872fd4;
    color: #fff;
}
.form-group .btn.btn-default.active{
    background:#872fd4;
}
.col-md-5{margin-right:6%;}
`;

class AddChild extends Component {
	
	constructor(props) {
  super(props);
  this.state = {
    grades:[],
	phone:'',
	name:'',
	grade_id:'',
	school:'',
	pincode:'',
	fields: {},
            errors: {}
	}
	
	//alert(dd);
	this.firsttimeregister = this.firsttimeregister.bind(this);
	this.componentDidMount = this.componentDidMount.bind(this);
	this.onChange = this.onChange.bind(this);
 }
	onChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;        
        this.setState({[e.target.name]: e.target.value});
    }
	
	
    componentDidMount() {
		AsyncStorage.getItem('userId').then(data => {
			
			this.setState({
					phone: data
			});
			
			
		});
		 //alert(this.state.phone);
		
		window.scrollTo(0, 0)
		 
		  fetch('https://dev-api.getfreadom.com/api/misc/v1/grade', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(res => res.json()).then(res => {
					var dd = JSON.stringify(res);
					//alert(dd);
                   //console.log(dd);
				   this.setState({
					grades: res.result
					});
					
			}).catch(() => this.setState({ refreshing: false }));
		
	 } 
	  
	    firsttimeregister(e,props){
	     var getData = [this.state.phone,this.state.name,this.state.grade_id,this.state.school,this.state.pincode];
      
  
	
	  
                    setStorage(true)
					AsyncStorage.setItem('childdata', getData);
					window.location.href = '/booking';
       
				
		}      
  
	  
    render() {
		var ff = this.state.grades;
		console.log(ff);
        return (
            <ChildMain>
                <div className="container">
                <div className="row">
                     <div className="col-md-5">
                         <div className="Left-child">
                             <div className="Heading">
                                 <h3><span>ADD YOUR CHILD</span> ENTER INFO</h3>
                             </div>
                             <div className="from-group-main">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" id="" onChange={this.onChange} placeholder="Name.."/>
                                </div>
                                <div class="form-group">
                                    <select name="grade_id" onChange={this.onChange} class="form-control">
									 <option>Select Grade</option>
									   {this.state.grades.map((team) => <option key={team.id} value={team.id}>{team.name} {team.age_group} year</option>)}
     
									</select>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="school" onChange={this.onChange} class="form-control" id="" placeholder="School"/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="pincode" onChange={this.onChange} class="form-control" id="" placeholder="Pincode.."/>
                                </div>
                                <div class="form-group">
                                     <button  onClick={this.firsttimeregister} class="btn btn-default">Confirm</button>
                                     <Link to="/booking">  <button   class="btn btn-success">Already Have Child Make Booking</button></Link>
                                </div>
								
                             </div>
                         </div>
                     </div>
                     
                     <div className="col-md-5">
                         <div className="right-image">
                              <img className="img-responsive" src={process.env.PUBLIC_URL+"img/school.png"} alt={"Child"}/>
                         </div>
                     </div>
                </div>
                </div>
            </ChildMain>
        );
    }
}

export default AddChild;