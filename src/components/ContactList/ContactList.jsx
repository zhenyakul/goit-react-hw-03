import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ phonebookData, onDelete }) {
  return (
    <ul className={css.list}>
      {phonebookData.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
