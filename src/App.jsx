import './App.css';
import Title from './components/Title';

export default function() {

  return (
    <div className="App">
      {/* {Title("My App")} */}

      {/* {Title({text: "My App"})} */}

      <Title text="My App" />
    </div>
  );
};
