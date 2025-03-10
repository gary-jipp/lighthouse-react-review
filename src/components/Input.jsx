import {useState} from 'react';

export default function Input(props) {
  const [text, setText] = useState(props.initial || "");

  const onChange = function(event) {
    setText(event.target.value);
  };

  return (
    <div>
      {/* <input type="text" onChange={onChange} /> */}
      <input type="text" onChange={onChange} value={text} />
    </div>
  );
};
