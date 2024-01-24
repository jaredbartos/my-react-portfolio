import { useState } from "react";
import { validateEmail } from "../utils";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const checkForEmptyFields = (field, value) => {
    if (value) {
      setEmptyFields(emptyFields.filter((element) => field !== element));
    } else {
      if (!emptyFields.includes(field))
      setEmptyFields([...emptyFields, field]);
    }    
  };

  const checkForInvalidEmail = (input) => {
    if (input) {
      if (!validateEmail(input)) {
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
      checkForInvalidEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    checkForEmptyFields(inputType, inputValue);
  };

  return (
    <div className="container">
      <div className="row m-5 d-flex justify-content-center">
        <div className="col-xxl-8">
          <ContactForm
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          name={name}
          email={email}
          message={message}
          invalidEmail={invalidEmail}
          emptyFields={emptyFields}
          />
        </div>
      </div>
    </div>
  );
}