import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'
import React from 'react';



class App extends React.Component {

  state = {
    famousContacts: contacts.slice(0, 5)
  }

  addRandomContact = () => {
    let newContact = '';
    const randomContact = Math.floor(Math.random() * contacts.length - 1)

    newContact = contacts[randomContact]
    this.setState(state => {
      return {
        famousContacts: [
          ...state.famousContacts,
          newContact
        ]
      }
    })
  }

  sortByName = () => {

    const sortByName = this.state.famousContacts.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })

    this.setState(state => ({
      famousContacts: [
        ...sortByName
      ]
    }))

  }

  sortByPopularity = () => {

    const sortByPopularity = this.state.famousContacts.sort((a,b) => {
      return b.popularity - a.popularity
    })

    this.setState(state => ({
      famousContacts: [
        ...sortByPopularity
      ]
    }))

  }

  deleteContact = (index) => {
    const deleteContact = [...this.state.famousContacts]
    deleteContact.splice(index,1)
    this.setState(state => ({
      famousContacts: [
        ...deleteContact
      ]
    }))
  }

  render() {

    const listContacts = this.state.famousContacts.map((contact, index) => {
    return (


      <tr>
        <td><img style={{ height: "75px" }} src={contact.pictureUrl} /></td>
        <td><p>{contact.name}</p></td>
        <td><p>{contact.popularity}</p></td>
        <button onClick={() => this.deleteContact(index)}>Delete</button>
      </tr>

    )

  }
  )

  return (
    <>
          <h1>Famous Contacts</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          

    <table className="table table-hover mt-5">
     <thead>
       <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          </tr>
      </thead>
      <tbody>
          {listContacts}
      </tbody>
      </table>
    </>
  )
  
  }
}
export default App;
