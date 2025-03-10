// import {useEffect, useState} from 'react';
// import mockData from "@/mockData";
import ContactForm from '@/components/ContactForm';
import ContactList from '@/components/ContactList';
import useContacts from '../hooks/useContacts';

export default function Contacts(props) {
  const {contacts, addContact, deleteContact} = useContacts(props.url);

  return (
    <div>
      <ContactForm onSubmit={item => addContact(item)} />
      <ContactList data={contacts} onClick={data => deleteContact(data)} />
    </div>
  );
};
