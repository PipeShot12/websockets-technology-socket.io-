import {useContacts} from "../../context/contactsContext";
import {Conversation,NoConversation} from "./Conversation"
import Sidebar from "./Sidebar"
import "./chat.css";

export default function Chat ({id}){
    const {selectedConversation} =useContacts();
   console.log(selectedConversation);
    return (
        <div className="col-12" style={{}}>
            <div className="row">
                <Sidebar id={id}/>
               {selectedConversation? <Conversation/>:<NoConversation/>}
            </div>
        </div>
    )
}