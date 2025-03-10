import '@/App.css';
import Title from '@/components/Title';
import Counter from '@/components/Counter';
import Input from '@/components/Input';
import ContactForm from '@/components/ContactForm';
import ContactList from '@/components/ContactList';
import mockData from "@/mockData";
import Contacts from '@/components/Contacts';

export default function() {
  // console.log("Rendering App");

  const log = function(item) {
    console.log(JSON.stringify(item));
  };

  // TODO:  get url from .env
  const url = "https://jsonplaceholder.typicode.com/users";

  return (
    <div className="App">
      {/* {Title("My App")} */}

      {/* {Title({text: "My App"})} */}

      <Title text="My App" />
      <Counter />
      {/* <Input /> */}
      {/* <ContactForm onSubmit={item => log(item)} /> */}
      {/* <ContactList data={mockData} onClick={item => log(item)} /> */}

      <Contacts url={url} />
    </div>
  );
};
