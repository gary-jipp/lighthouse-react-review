import {useState} from 'react';

export default function ContactForm(props) {
  const [formData, setformData] = useState({name: "", email: ""});

  const onChange = function(event) {
    // setformData({...formData, [event.target.name]: event.target.value});
    setformData(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const onSubmit = function(event) {
    event.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" onChange={onChange} value={formData.name}
            placeholder="Enter contact name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" onChange={onChange} value={formData.email} type="email" placeholder="Enter email addreee" />
        </div>
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};
