// React component to conditionally render the label for email field
function EmailLabel(props) {
  if (props.emptyFields.includes('email')) {
    return 'Please enter an email address';
  } else if (!props.isValidEmail) {
    return 'Invalid email address';
  } else {
    return 'Email address';
  }
}

// React component for submit button
function SubmitButton(props) {
  return (
    <button
      type="submit"
      onClick={props.handleBtnClick}
      className="btn btn-primary mt-3"
      // Disable button until form requirements are met
      disabled={props.name && props.email && props.message && props.isValidEmail ? false : true}
    >
      Submit
    </button>
  );
}

export default function ContactForm(props) {
  // Style for message box
  const messageStyle = { height: 400 };

  return (
    <form onBlur={props.handleBlur}>
      <div className="form-floating mb-3">
        <input
          type="text"
          onChange={props.handleInputChange}
          name="name"
          // If field is empty onBlur, use invalid form bootstrap class
          className={props.emptyFields.includes('name') ? "form-control is-invalid" : "form-control"}
          id="nameInput"
          placeholder="Name"
          value={props.name}
        />
        <label htmlFor="nameInput">
          {props.emptyFields.includes('name') ? 'Please enter a name' : 'Name'}
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          onChange={props.handleInputChange}
          name="email"
          // If field is empty onBlur, use invalid form bootstrap class
          className={props.emptyFields.includes('email') || !props.isValidEmail ? "form-control is-invalid" : "form-control"}
          id="emailInput"
          placeholder="name@example.com"
          value={props.email} />
        <label htmlFor="emailInput">
          <EmailLabel {...props} />
        </label>
      </div>
      <div className="form-floating">
        <textarea
          // If field is empty onBlur, use invalid form bootstrap class
          className={props.emptyFields.includes('message') ? "form-control is-invalid" : "form-control"}
          onChange={props.handleInputChange}
          name="message"
          placeholder="Leave a message here"
          id="messageInput"
          value={props.message}
          style={messageStyle}>
        </textarea>
        <label htmlFor="messageInput">
          {props.emptyFields.includes('message') ? 'Please enter a message' : 'Message'}
        </label>
      </div>
      <SubmitButton {...props} />
    </form>
  );
}