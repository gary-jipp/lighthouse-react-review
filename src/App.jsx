import '@/App.css';
import Title from '@/components/Title';
import Counter from './components/Counter';

export default function() {
  console.log("Rendering App");

  return (
    <div className="App">
      {/* {Title("My App")} */}

      {/* {Title({text: "My App"})} */}

      <Title text="My App" />

      <Counter />
    </div>
  );
};
