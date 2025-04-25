import {useEffect, useState} from "react";

export default function useContacts(url) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const log = function(item) {
    console.log(JSON.stringify(item));
  };

  const addContact = function(contact) {
    // Note:  Mock API does not really add
    // returns same ID every time
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
      .then((response) => response.json())
      .then((newContact) => {
        console.log(newContact);
        setContacts([newContact, ...contacts]);
      })
      .catch(err => {
        console.log(err.message);
      });;
  };

  // Note:  Mock API does not really delete
  const deleteContact = function(contact) {
    fetch(`${url}/${contact.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setContacts(contacts.filter(item => item.id != contact.id));
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return {contacts, addContact, deleteContact};
};