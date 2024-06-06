import { useState, useEffect } from "react";
import { Contacts, Searchbar } from "./components";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const compare = (a, b) => (a.name > b.name ? 1 : -1);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch(url);
      result.json().then((users) => {
        setUsers(users.sort(compare));
      });
    };
    const url = "https://jsonplaceholder.typicode.com/users";
    fetchUsers(url);
  }, []);

  const search = (users) => {
    if (query.length < 1) return users;
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="container">
      <h1>Contacts ({users.length})</h1>
      <Searchbar setQuery={setQuery} />
      <div className="contacts_container">
        {users.length > 0 ? (
          <Contacts users={search(users)} />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}
