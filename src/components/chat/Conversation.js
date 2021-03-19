import React,{useState} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoodIcon from '@material-ui/icons/Mood';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import bgConversation from './bgConversation.jpg';
import bgNoConversation from './whatsappBg.png'




export function Conversation() {

    const [text,setText] =useState("");
    
    function handleSubmit (e){
        e.preventDefault();
    }

    return (
        <div className="col-md-8 p-0 m-0" >
             <div style={{height:"7.1vh",backgroundColor:"var(--fourth)",borderBottom:"1px solid  #d0d9db"}} className="col-md-12 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <AccountCircleIcon style={{fontSize:"3.6em",color:"#d0d9db"}} className="pl-2"/>
                    <p className="m-0 p-0 ml-2">Nombre</p>

                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-search col-md-2" style={{color:"#919191",fontSize:"1em"}}></i>
                  <MoreVertIcon style={{fontSize:"1.6em",color:"#919191"}} className="ml-4"/>
                </div>
            </div>
            <div className="col-md-12 p-0 m-0" style={{maxHeight:"88vh"}}>
                <img src={bgConversation} alt="" style={{backgroundAttachment:"fixed"}}/>
            </div>
            <div style={{height:"8vh",backgroundColor:"var(--fourth)",borderBottom:"1px solid  #d0d9db",position:"absolute",bottom:"0",zIndex:"10"}} className="col-md-12 d-flex align-items-center">
                <MoodIcon style={{fontSize:"2.5em",color:"#919191"}} className="pl-3"/>
                <AttachFileIcon style={{fontSize:"2em",color:"#919191"}} className="pl-2"/>
                
                <div className="col-md-12 ">
                    <form onSubmit={handleSubmit} className="d-flex align-items-center">
                        <input type="text"  className="form-control col-md-10" style={{border:"none",outline:"none",boxShadow:"none",backgroundColor:'white',borderRadius:"50em"}} placeholder="Type a message" required onChange={e=>setText(e.target.value.trim())}/>
                        <MicIcon style={{fontSize:"1.5em",color:"#919191"}}/>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export function NoConversation() {



    return (
        <div className="col-md-8 p-0 m-0 d-flex align-items-center justify-content-center flex-column" style={{height:"100vh"}}>
            <img src={bgNoConversation} alt="" />
            
            <div style={{position:"absolute",bottom:"0",height:"15px",width:"100%",backgroundColor:"#4ADF83"}}></div>
        </div>
    )
}
