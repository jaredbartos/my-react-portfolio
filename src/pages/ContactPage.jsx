// Import useState
import { useState } from "react";
// Import email validation function
import { validateEmail } from "../assets/js/utils";
// Import ContactForm component
import ContactForm from "../components/ContactForm";

// Contact Page component
export default function ContactPage() {
  // Create useState variables for name, email, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Create useState variables to keep track of what fields are empty in contact form
  const [emptyFields, setEmptyFields] = useState([]);
  // Create useState variables to keep track of email validation
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Function to edit emptyFields state
  const checkForEmptyFields = (field, value) => {
    // If there is a value in the field
    if (value) {
      // Set emptyFields by filtering out the element that is not empty
      setEmptyFields(emptyFields.filter((element) => field !== element));
    } else {
      // If field is empty and emptyFields doesn't already include it
      if (!emptyFields.includes(field)) {
        // Add the field to the array
        setEmptyFields([...emptyFields, field]);
      }
    }    
  };

  // Function to check email input and change invalidEmail state accordingly
  const checkForValidEmail = (input) => {
    if (input) {
      if (validateEmail(input)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }
  };

  // Handler function for onChange behavior
  const handleInputChange = (e) => {
    // Declare variables for values based on target of click
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Conditionally set state values
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
      checkForValidEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Handler function for onBlur behavior
  const handleBlur = (e) => {
    // Declare variables based on target of event
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Call function to edit emptyFields state
    checkForEmptyFields(inputType, inputValue);
  };

  // Handler function for button click
  const handleBtnClick = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <h2 className="col text-center">Contact</h2>
      </div>
      <div className="container">
        <div className="row m-5 d-flex justify-content-center">
          <div className="col-xxl-8">
            <ContactForm
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            handleBtnClick={handleBtnClick}
            name={name}
            email={email}
            message={message}
            isValidEmail={isValidEmail}
            emptyFields={emptyFields}
            />
          </div>
        </div>
      </div>
    </div>
  );
}