import React from "react";
import css from 'components/ContactList/ContactList.module.css';


export const ContactList = ({ filter, contacts, onDeleteContact }) => {
   const normalizedFilter = filter.toLowerCase();
   const filteredNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
   return( 
   <ul className={css.contactsList}>
      {filteredNames.map(({ id, name, number }) => (
         <li key={id} className={css.contactsListItem}>
            <span className={css.contactsListSpan}>{name}:</span>
            <span className={css.contactsListSpan}>{number}</span>
            <button
               onClick={() => onDeleteContact(id)}
               className={css.contactsListBtn}>Delete
            </button>
         </li>
      ))}
   </ul>)  
}