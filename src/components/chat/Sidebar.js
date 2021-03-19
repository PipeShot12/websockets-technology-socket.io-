import "./sidebar.css"
import {useState} from "react"; 
import {DonutLarge} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import {useConversations} from "../../context/conversationContext";
import NewContact from "./NewContact";
import NewConversation from "./NewConversation";




export default function Sidebar({id}) {
    const [newContact, setnewContact] = useState("");
    const [newConversation, setnewConversation] = useState("");

    const {conversations} =useConversations();
    console.log(conversations)

    return (
        <div className="col-md-4 m-0 p-0" style={{borderRight:"1px solid  #d0d9db"}}>
            {/* NEW CONTACT */}
            <NewContact show={newContact} close={setnewContact} id={id}/>
            
            {/* NEW CONVERSATION */}

            <NewConversation show={newConversation} close={setnewConversation}/>

            {/* CHATS */}

            <div style={{backgroundColor:"var(--fourth)"}} className="col-md-12 d-flex align-items-center justify-content-between">
                <AccountCircleIcon style={{fontSize:"3.6em",color:"#d0d9db"}} className="pl-3"/>
                <div>
                    <DonutLarge style={{fontSize:"1.5em",color:"#919191"}}/>
                    <AddIcon style={{fontSize:"1.5em",color:"#919191",cursor:"pointer"}} className="mx-3" onClick={()=>{setnewContact('new-friend-show')}}/>
                    <MessageIcon style={{fontSize:"1.5em",color:"#919191",cursor:"pointer"}} onClick={()=>{setnewConversation('new-friend-show')}}/>
                </div>
            </div>
            <div className="col-md-12 d-flex py-2 align-items-center justify-content-center" style={{border:"0.01px solid #d0d9db"}} >
                <i className="fas fa-search px-4" style={{color:"#919191",fontSize:"0.9em"}}></i>
                <input type="text"  className="w-100" style={{border:"none",outline:"none",boxShadow:"none",fontSize:"0.8em"}} placeholder="Search or start new chat"/>
            </div>
             <div style={{overflowY:"scroll",flexWrap:"wrap",height:"88vh"}} >
                 
             {conversations.map((conversation,index)=>{
                 
                 return(
                <div key={conversation.name+index} className={"col-md-12 py-2 "} style={{borderBottom:"1px solid  #d0d9db",cursor:"pointer"}} >
                    <div className="d-flex align-items-center pl-1" >
                        <AccountCircleIcon style={{fontSize:"3.5em",color:"#d0d9db"}}/>
                        <div className="ml-2">
                            <p className="m-0 p-0">{conversation.recipients.map(r=> r.name).join(", ")}</p>
                            <p className="m-0 p-0" style={{fontSize:"0.9rem"}}>Hi!</p>
                        </div>
                    </div>
                </div>
                 )
             })}
            </div> 
        </div>
    )
}
