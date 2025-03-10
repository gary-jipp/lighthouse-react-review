import ContactForm from '@/components/ContactForm';
import ContactList from '@/components/ContactList';
import useContacts from '../hooks/useContacts';

export default function Contacts(props) {
  const {contacts, addContact, deleteContact} = useContacts();

  return (
    <div>
      <ContactForm onSubmit={item => addContact(item)} />
      <ContactList contacts={contacts} onClick={item => deleteContact(item)} />
    </div>
  );
};
