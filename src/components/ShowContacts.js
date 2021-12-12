import React from "react";
import Contact from "./Contact";

const ShowContacts = ({contacts, deleteContact}) =>{

    return(
        <section className="contacts-section">
        {contacts.map((contact)=>{
            return(
                <Contact info={contact} key={contact.id} deleteContact={deleteContact}/>
            )
        })}
        </section>
    )
}

export default ShowContacts;