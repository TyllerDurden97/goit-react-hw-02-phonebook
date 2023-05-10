import React from "react";

export const ContactList = ({ filter, contacts, onDeleteContact }) => {
   const normalizedFilter = filter.toLowerCase();
   const filteredNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
   return( 
   <ul>
      {filteredNames.map(({ id, name, number }) => (
         <li key={id}>{name}: {number}
            <button
            onClick={() => onDeleteContact(id)}>Delete
            </button>
         </li>
      ))}
                  

   </ul>)
  
}