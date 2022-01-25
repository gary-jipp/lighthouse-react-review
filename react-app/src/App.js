import { useEffect, useState } from 'react';
import Header from 'components/Header';
import { v4 } from 'uuid';
import 'App.css';
import axios from 'axios';

const url = "/api/names";

const testData = [
  { uid: "aaa", name: "Ali Barber" },
  { uid: "bbb", name: "Jim Holden" },
];

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data);
      });

  }, []);


  const onChange = function(event) {
    setInput(event.target.value);
  };

  const getData = function() {
    setData(testData);
  };

  const addFriend = function(event) {
    event.preventDefault();
    const friend = { name: input };
    
    axios.post("/api/names", friend)
      .then(res => {
        setData([...data, res.data]);
      });
  };

  const list = data.map((item, i) => {
    return <li key={item.uid}>{item.name}</li>;
  });

  return (
    <div className="App">
      <Header text="My Friends" />

      <div className='input-form' >
        <form onSubmit={addFriend}>
          <input type="text" value={input} onChange={onChange} />
          <button>Add Friend</button>
        </form>
      </div>

      <button type="button" onClick={getData}>Get Friends</button>
      <ul>
        {list}
      </ul>

    </div>
  );
};