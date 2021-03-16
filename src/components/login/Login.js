import React, { useState,useEffect } from 'react';
import logo from './logo.png';
import './login.css';


export default function Login (props){

    const [register, setregister] = useState(false);

    const showRgister=(show)=>{
            setregister (show)
    }
        return (
            <div className="col-md-10 mx-auto login-container m-0 p-0">
                <div className="bg-whatsapp">
                    <div className="bg-login">
                        <div className="row">
                            <div className="col-md-11 mt-3 mx-auto" style={{color:"white",fontSize:"1rem",fontWeight:"bold"}}>
                                <img src={logo} alt="logo" style={{width:"50px"}}/>
                                WHATSAPP
                            </div>
                        </div>
                    </div>
                    <div className="bg-login-2">
                    </div>  
                </div>
                {register?<RegisterForm transition={"show-register"} />:<LoginForm show={showRgister} login={props.login}/>}
            </div>
        )
    
};

//LOGIN FORM 
function LoginForm(props){
    return(
    <form className="login-form col-md-6 mx-auto p-5 shadow">
        <div className="text-center mb-4 p-2" style={{color:"white",fontSize:"1rem",fontWeight:"bold",backgroundColor:"var(--primary)"}}>
            SIGN IN
        </div>
        <div className="input-group mb-4">
            <input type="email" placeholder="Email" className="form-control"/>
        </div>
        <div className="input-group mb-4">
            <input type="password" placeholder="Password" className="form-control"/>
        </div>
        <div className="input-group mb-4">
            <button className="btn btn-info btn-block button-login" onClick={()=>{props.login(true)}}>LOGIN</button>
        </div>
        <div className="input-group text-center">
            <button className="" style={{color:"#00988F",backgroundColor:"white",border:"none",padding:"0"}} onClick={()=>{props.show(true)}}>SIGN UP</button>
        </div>
    </form>
    )
};

//REGISTER FORM 
function RegisterForm(props){

    const [opacity, setopacity] = useState("")

    useEffect(() => {
           setTimeout(()=>{
               setopacity(props.transition)
           },50)    
    });

    return(
    <form className={"register-form col-md-6 mx-auto p-5 shadow "+opacity}>
        <div className="text-center mb-4 p-2" style={{color:"white",fontSize:"1rem",fontWeight:"bold",backgroundColor:"var(--primary)"}}>
            SIGN UP
        </div>
        <div className="input-group mb-4">
            <input type="text" placeholder="Username" className="form-control"/>
        </div>
        <div className="input-group mb-4">
            <input type="email" placeholder="Email" className="form-control"/>
        </div>
        <div className="input-group mb-4">
            <input type="password" placeholder="Password" className="form-control"/>
        </div>
        <div className="input-group mb-4">
            <input type="email" placeholder="Confirmation password" className="form-control"/>
        </div>
        <div className="input-group ">
            <button className="btn btn-info btn-block button-login" >REGISTER</button>
        </div>
    </form>
    )
};
