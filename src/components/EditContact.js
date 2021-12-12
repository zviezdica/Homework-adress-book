import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EditContact = ({contactName, changeName, closeEdit}) =>{
    const [editValue, setEditValue] = useState(contactName);

    const changeValue = (e) =>{
        let newValue = e.target.value;
        setEditValue(newValue);
    }

    const changeInfo = () =>{
        changeName(editValue)
    }

    return(
    <div className="edit-contact">
        <input className="edit-input" name="edit" id="edit" onChange={changeValue} value={editValue}/>
        <div className="edit-options">
            <FontAwesomeIcon icon={faCheck} onClick={changeInfo} className="check-btn"/>
            <button className="close-btn" onClick={closeEdit}>X</button>
        </div>
    </div>
    )
}

export default EditContact;