import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);  // Перевіряємо список контактів
  const filters = useSelector((state) => state.filters.name);  // Перевіряємо фільтр по імені

  // Відфільтровуємо контакти згідно фільтру
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
