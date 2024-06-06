import ContactsCard from "./ContactsCard";

const Contacts = ({users}) => {
  return (
    <div className="contacts_columns">
      {users.length > 1 ? users.map((user) => (
        <ContactsCard key={user.id} user={user} />
      )) : <h1 className="err1">No Results</h1>}
    </div>
  );
};

export default Contacts;
