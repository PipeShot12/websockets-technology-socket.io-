import React, { useState,useEffect} from 'react';

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
                {register?<RegisterForm transition={"show-register"} show={showRgister}/>:<LoginForm show={showRgister} login={props.login}/>}
            </div>
        )
    
};

//LOGIN FORM 
function LoginForm(props){
    const [user, setuser] = useState({email:"",password:""});

    const validation = (e)=>{
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(user.email)&& user.password !==""){
            fetch('http://localhost:5000/api/v1/login',{
                method:'POST',
                body:JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res=>{
                if (!res.ok) {
                    return;
                }
                return res.json();
            })
            .then(res=>{
                if(res){
                    props.login(res.data[0],true);
                }
            });
        }
    }

    return(
    <form className="login-form col-md-6 mx-auto p-5 shadow">
        <div className="text-center mb-4 p-2" style={{color:"white",fontSize:"1rem",fontWeight:"bold",backgroundColor:"var(--primary)"}}>
            SIGN IN
        </div>
        <div className="input-group mb-4">
            <input type="email" placeholder="Email" className="form-control" onChange={e => setuser({ ...user, email: e.target.value.trim() })} value={user.email} autoComplete="on"/>
        </div>
        <div className="input-group mb-4">
            <input type="password" placeholder="Password" className="form-control" onChange={e => setuser({ ...user, password: e.target.value.trim() })} value={user.password}/>
        </div>
        <div className="input-group mb-4">
            <button className="btn btn-info btn-block button-login"  onClick={validation}>LOGIN</button>
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
    const [user, setuser] = useState({name:"",email:"",password:"",cPassword:""})


    function createNewUser(e){
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(user && user.name.length>3 && re.test(user.email) && user.password>7 && user.cPassword ===user.password){
          
            fetch('http://localhost:5000/api/v1/clients',{
                method: 'POST',
                body:JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res) 
                props.show(false)})
        }
       

    }


    useEffect(() => {
        setTimeout(()=>{
            setopacity(props.transition)
        },50)    
 });

    return(
    <form  onSubmit={createNewUser} className={"register-form col-md-6 mx-auto p-5 shadow "+opacity}>
        <div className="text-center mb-4 p-2" style={{color:"white",fontSize:"1rem",fontWeight:"bold",backgroundColor:"var(--primary)"}}>
            SIGN UP
        </div>
        <div className="input-group mb-4">
            <input type="text" placeholder="Username" className="form-control" name="username" onChange={e => setuser({ ...user, name: e.target.value.trim() })} value={user.name}/>
        </div>
        <div className="input-group mb-4">
            <input type="email" placeholder="Email" className="form-control" name="email" onChange={e => setuser({ ...user, email: e.target.value.trim() })} value={user.email}/>
        </div>
        <div className="input-group mb-4">
            <input type="password" placeholder="Password" className="form-control" name="password" onChange={e => setuser({ ...user, password: e.target.value.trim()})} value={user.password}/>
        </div>
        <div className="input-group mb-4">
            <input type="password" placeholder="Confirmation password" className="form-control" name="cPassword" onChange={e => setuser({ ...user, cPassword: e.target.value.trim()})} value={user.cPassword}/>
        </div>
        <div className="input-group ">
            <button className="btn btn-info btn-block button-login" type="submit">REGISTER</button>
        </div>
    </form>
    )
};
