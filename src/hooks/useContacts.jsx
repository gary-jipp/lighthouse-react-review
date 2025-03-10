import {useEffect, useState} from 'react';
import mockData from "@/mockData";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(mockData);
  }, []);

  const log = function(item) {
    console.log(JSON.stringify(item));
  };

  const addContact = function(contact) {
    const newContact = {...contact, id: contacts.length + 1};
    log(newContact);
    setContacts([newContact, ...contacts]);
  };

  const deleteContact = function(contact) {
    log(contact);
    setContacts(contacts.filter(item => item.id != contact.id));
  };

  return {contacts, addContact, deleteContact};
}