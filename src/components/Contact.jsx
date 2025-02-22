import styles from "./Contact.module.css";
import PropTypes from "prop-types";

function Contact({ contact, onDeleteContact }) {
  return (
    <div className={styles.contactItem}>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button
        className={styles.contactDeleteButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
