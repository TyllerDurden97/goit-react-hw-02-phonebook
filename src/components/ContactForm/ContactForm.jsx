import { Component } from "react";
// import { nanoid } from 'nanoid';



export class ContactForm extends Component {
   state = {
      name: '',
      number: '',
   };

   handleInputChange = (e) => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value })
   };

   handleFormSubmit = (e) => {
            //   console.log(this.props.contacts);

      e.preventDefault();
      // const nameInputValue = e.target.elements.name.value;
      // console.log(nameInputValue);
      // if (this.state.name.length === 0) {
      //    return;
      // }
      // this.props.contacts.map(contact => {
      //    if (contact.name === nameInputValue) {
      //       alert(`${contact.name} is already in Contacts`)
      //    }
      // });
      // const newContact = {
      //    name: this.state.name,
      //    number: this.state.number,
      //    id: nanoid(),
      // };
      // this.setState((prevState) => ({
      //    contacts: [newContact, ...this.props.contacts],
      //    name: '',
      //    number: '',
      // }));
      this.props.onSubmitData(this.state);
      this.setState({
         name: '',
         number: '',
      });
   };

   render() {
            const { number, name } = this.state;

      return (
         <form onSubmit={this.handleFormSubmit}>
               <label>Name 
               <input
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
            </form>)
   }

}
   
   
