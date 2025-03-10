import '@/App.css';
import Title from '@/components/Title';
import Counter from './components/Counter';
import Input from './components/Input';
import ContactForm from './components/ContactForm';

export default function() {
  // console.log("Rendering App");

  return (
    <div className="App">
      {/* {Title("My App")} */}

      {/* {Title({text: "My App"})} */}

      <Title text="My App" />
      <Counter />

      {/* <Input /> */}

      <ContactForm onSubmit={item => console.log(JSON.stringify(item))} />

    </div>
  );
};
