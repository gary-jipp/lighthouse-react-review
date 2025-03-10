
const ContactListItem = function(props) {
  const {name, email} = props.item;

  // List should not care what happens on onClick
  return (
    <li onClick={() => props.onClick(props.item)} >
      {name}: {email}
    </li >
  );

};

export default function ContactList(props) {

  // const list = props.data.map(c => (
  //   <li key={c.id} onClick={() => props.onClick(c)}> {c.name}: {c.email}</li>
  // ));

  const list = props.data.map(item => <ContactListItem key={item.id} item={item}
    onClick={props.onClick} />);

  return (
    <ul>
      {list}
    </ul>
  );
};
