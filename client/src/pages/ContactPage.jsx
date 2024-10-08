// Import useState
import { useState } from 'react';
// Import email validation function
import { validateEmail } from '../assets/js/utils';
// Import ContactForm component
import ContactForm from '../components/ContactForm';
// Import icon data
import { FaEnvelope } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

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
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const sendForm = async () => {
    const response = await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      setFormSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      console.log('Something went wrong!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendForm();
  };

  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular from-bottom fs-4">
          <IconContext.Provider
            value={{ className: 'icon-position icon-color' }}
          >
            <FaEnvelope />
          </IconContext.Provider>
          Contact
        </h2>
      </div>
      <div className="container-lg">
        <p className="from-bottom delay-1">
          If you'd like to get in touch with me about employment, collaboration,
          or any questions about my projects, you can email me at{' '}
          <a href="mailto:jaredbartos@gmail.com">jaredbartos@gmail.com</a>. You
          can also fill out the form below, and I'll get back to you as soon as
          I can.
        </p>
      </div>
      <div className="container-xl">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-xxl-6 col-lg-8 col-md-10">
            {formSubmitted ? (
              <p className="text-center">
                Your form has been submitted. Thank you!
              </p>
            ) : (
              <ContactForm
                handleInputChange={handleInputChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                name={name}
                email={email}
                message={message}
                isValidEmail={isValidEmail}
                emptyFields={emptyFields}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
