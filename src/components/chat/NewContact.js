import {useRef} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {useContacts} from "../../context/contactsContext";




export default function NewContact({show,close,id}){

    const nameRef = useRef()
    const idRef = useRef()
    const {createContact} = useContacts();

    function addFriend(e){
        e.preventDefault();
        createContact(idRef.current.value,nameRef.current.value);
        idRef.current.value="";
        nameRef.current.value="";
       close("");
   }
    return (
        <div style={{backgroundColor:"white"}} className={'new-friend-hidden '+show}>
                <div style={{height:"10vh",backgroundColor:"var(--primary)"}} className="col-md-12 d-flex align-items-end">
                    <div className="mb-3 ml-4 d-flex align-items-center">
                    <ArrowBackIcon style={{fontSize:"2em",color:"white",cursor:"pointer"}} onClick={()=>{close('')}}/>
                    <p className="p-0 m-0 ml-2" style={{fontSize:"1.2em",fontWeight:"bold",color:"white"}}>New Contact</p>
                    </div>
                </div>
                <div style={{height:"90vh",backgroundColor:"var(--secondary)"}} className="col-md-12 mx-auto">
                    <p className="mx-auto my-3">Your ID: {id}</p>
                    <div className="col-12 mt-3 " >
                        <form onSubmit={addFriend}>
                            <input type="text"  className="form-control p-4 col-12 mb-3" style={{border:"none",outline:"none",boxShadow:"none",backgroundColor:"var(--fourth)",borderRadius:"50em"}} placeholder="Enter Your Friend's Name" ref={nameRef} required/>
                            <input type="text"  className="form-control p-4 col-12 mb-3" style={{border:"none",outline:"none",boxShadow:"none",backgroundColor:"var(--fourth)",borderRadius:"50em"}} placeholder="Enter Your Friend's ID" ref={idRef} required/>
                            <button type="submit" className="btn btn-block align-items-center d-flex justify-content-center" style={{backgroundColor:"var(--primary)",color:"white",fontSize:"1.2em"}}><PersonAddIcon style={{fontSize:"1.5em",color:"white"}}/>Add New Friend</button>   
                        </form>
                    </div>
                   
                </div>
        </div>
    )
}
