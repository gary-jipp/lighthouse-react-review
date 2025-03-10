import '@/App.css';
import Title from '@/components/Title';
import Counter from './components/Counter';
import Input from './components/Input';

export default function() {
  // console.log("Rendering App");

  return (
    <div className="App">
      {/* {Title("My App")} */}

      {/* {Title({text: "My App"})} */}

      <Title text="My App" />

      <Input />

      <Counter />

    </div>
  );
};
