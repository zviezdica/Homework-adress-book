import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditContact from "./EditContact";


const Contact = ({info, deleteContact}) =>{
    const [isActive, setIsActive] = useState(false);
    let {id, name, tel} = info;

    const [contactName, setContactName] = useState(name);

    const edit = () =>{
        setIsActive(!isActive);
        console.log('ok')
        console.log(isActive)
    }

    const handleChangeName = (editValue) =>{
        if(editValue){
        console.log(editValue)
        setContactName(editValue)
        setIsActive(false)
        }
    }

    const closeEdit = () =>{
        setIsActive(false);
        console.log(isActive);
    }

    return(
        <article className="contact" key={id}>
            <div className="contact-info">
                <h3>{contactName}</h3>
                <h3>{tel}</h3>
                <div className="contact-options">
                    <FontAwesomeIcon icon={faPen} className="icon pen" onClick={edit}/>
                    <FontAwesomeIcon icon={faTrash} className="icon trash" onClick={()=>deleteContact(id)}/>
                </div>
            </div>
            {isActive && <EditContact changeName={handleChangeName} contactName={contactName} closeEdit={closeEdit}/>}
        </article>
    )
}

export default Contact;