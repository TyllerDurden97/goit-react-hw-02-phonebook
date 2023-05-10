import { Component } from "react";
// import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import css from 'components/App.module.css';



export class App extends Component {

   state = {
      contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
   };

   formSubmitData = ({ name, number }) => {
      const {contacts} = this.state
      // console.log();
      // console.log(e.target.elements.name.value);
      // if (name.length === 0) {
      //    return;        
      // }
      const newContact = {
         name,
         number,
         id: nanoid(),
      };
      const filteredContact = contacts.filter(contact =>
         contact.name.toLowerCase().includes(newContact.name.toLowerCase())).length;
    
      if (filteredContact) {
         return alert(`${name} is already in Contacts`)
      } else {
         this.setState((prevState) => ({
            contacts: [newContact, ...prevState.contacts],
         }));
      };
   }
   
      // nameInputId = nanoid();
      // numberInputId = nanoid();

      // handleInputChange = (e) => {
      //    const { name, value } = e.currentTarget;
      //    this.setState({ [name]: value })
      // };
   
      handleFilterChange = (e) => {
         this.setState({ filter: e.currentTarget.value })
      };
      
      // handleFormSubmit = (e) => {
      //    e.preventDefault();
      //    const nameInputValue = e.target.elements.name.value;
      //    console.log(e.target.elements.name.value);
      //    if (this.state.name.length === 0) {
      //       return;
      //    }
      //    this.state.contacts.map((contact) => {
      //       if (contact.name === nameInputValue) {
      //          alert(`${contact.name} is already in Contacts`)
      //       }
      //    });
      //    const newContact = {
      //       name: this.state.name,
      //       number: this.state.number,
      //       id: nanoid(),
      //    };
      //    this.setState((prevState) => ({
      //       contacts: [newContact, ...prevState.contacts],
      //       name: '',
      //       number: '',
      //    }));
      // };

      deleteContact = contactId => {
         this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
         }));
      };
      
      render() {
         const { filter, contacts } = this.state;
         // const normalizedFilter = this.state.filter.toLowerCase(); 
         // const filteredNames = this.state.contacts.filter(contact =>
         //    contact.name.toLowerCase().includes(normalizedFilter));

         return (
            <div>
               <h1 className={css.pageTitle}>Phonebook</h1>
               <ContactForm
                  onSubmitData={this.formSubmitData}
               />
               {/* <form onSubmit={this.handleFormSubmit}>
               <label>Name 
               <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
               />
               </label>
                <label>Number 
               <input
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
               />
               </label>

               <button type="submit">Add contact</button>
            </form> */}

               <h2 className={css.title}>Contacts</h2>
               <Filter value={filter} onChange={this.handleFilterChange} />
               <ContactList filter={filter} contacts={contacts} onDeleteContact={this.deleteContact} />
               {/* <label>Find contacts by name:
               <input
                  type="text"
                  value={filter}
                  onChange={this.handleFilterChange}
   
               />
            </label> */}
               {/* <ul>               
                     {filteredNames.map(({id, name, number}) => (
                        <li key={id}>{name}: { number}</li>
))}               
            </ul> */}
          
            </div>
         )

      };
   };

