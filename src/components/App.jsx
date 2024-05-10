import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "../data.json";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [phonebookData, setPhonebookData] = useState(() => {
    const initialData = JSON.parse(window.localStorage.getItem("data"));
    if (initialData != null) {
      return initialData;
    } else {
      return [];
    }
  });
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(phonebookData));
  }, [phonebookData]);

  const filtredData = phonebookData.filter((contact) => {
    return contact.name.toLowerCase().includes(searchFilter.toLowerCase());
  });

  const handleDelete = (itemId) => {
    setPhonebookData((prevState) => {
      return prevState.filter((contact) => contact.id != itemId);
    });
  };

  const handleSubmit = (values) => {
    setPhonebookData((prevState) => {
      return [
        ...prevState,
        { id: nanoid(), name: values.name, number: values.number },
      ];
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />
        <SearchBox onFilter={setSearchFilter} value={searchFilter} />
        <ContactList phonebookData={filtredData} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
