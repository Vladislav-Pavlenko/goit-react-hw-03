import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
export default function Contact({ id, name, number, deleteContact }) {
  return (
    <>
      <div className={css.contact}>
        <div className={css.contact_container}>
          <IoPerson />
          {name}
        </div>
        <div className={css.contact_container}>
          <FaPhone />
          {number}
        </div>
      </div>
      <button
        className={css.contact_btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}
