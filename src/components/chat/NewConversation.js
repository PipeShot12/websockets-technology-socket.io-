import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useContacts} from "../../context/contactsContext";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {useConversations} from "../../context/conversationContext";
import {useState,useRef} from 'react'




export default function NewConversation({show,close}){
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts();
    const {createConversation} = useConversations();
    const checkbox = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        checkbox.current.value=false
        createConversation(selectedContactIds)
        
        close("");
      }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
          if (prevSelectedContactIds.includes(contactId)) {
            return prevSelectedContactIds.filter(prevId => {
              return contactId !== prevId
            })
          } else {
            return [...prevSelectedContactIds, contactId]
          }
        })
      }

    return (
        <div style={{backgroundColor:"white"}} className={'new-friend-hidden '+show}>
            <form onSubmit={handleSubmit}>
                <div style={{height:"10vh",backgroundColor:"var(--primary)"}} className="col-md-12 d-flex align-items-end">
                    <div className="mb-3 ml-4 d-flex align-items-center">
                    <ArrowBackIcon style={{fontSize:"2em",color:"white",cursor:"pointer"}} onClick={()=>{close('')}}/>
                    <p className="p-0 m-0 ml-2" style={{fontSize:"1.2em",fontWeight:"bold",color:"white"}}>New Conversation</p>
                    </div>
                </div>               
                <div style={{overflowY:"scroll",borderRight:"1px solid  #d0d9db",flexWrap:"wrap",height:"89.9vh"}} >
                    {contacts.map((contact,index)=>{
                    return(
                    <div key={contact.name+index} className={"col-md-12 py-2 "} style={{borderLeft:"1px solid  #d0d9db",cursor:"pointer"}}>
                        <div className="d-flex align-items-center pl-1" >
                            <AccountCircleIcon style={{fontSize:"3.5em",color:"#d0d9db"}}/>
                            <div className="ml-2">
                                <p className="m-0 p-0">{contact.name}</p>
                                <input ref={checkbox}type="checkbox" value={selectedContactIds.includes(contact.id)} onChange={()=>{handleCheckboxChange(contact.id)}}/>
                            </div>
                        </div>
                    </div>
                    )})}
                     <div className={`col-12 py-0 my-0 ${contacts.length<1?'d-none':'d-block'}`}>
                        <button type="submit" className="btn btn-block align-items-center d-flex justify-content-center my-3 " style={{backgroundColor:"var(--primary)",color:"white",fontSize:"1.2em"}}><QuestionAnswerIcon style={{fontSize:"1.5em",color:"white"}}/>New Chat</button>   
                     </div>
                </div> 
                
                </form>
        </div>
    )
}
