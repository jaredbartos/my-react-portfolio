export default function ContactForm(props) {
  const messageStyle = { height: 400 };

  return (
    <form onBlur={props.handleBlur}>
      <div className="form-floating mb-3">
        <input type="text" onChange={props.handleInputChange} name="name" className="form-control" id="nameInput" placeholder="Name" value={props.name} />
        <label htmlFor="nameInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" onChange={props.handleInputChange} name="email" className="form-control" id="emailInput" placeholder="name@example.com" value={props.email} />
        <label htmlFor="emailInput">Email address</label>
      </div>
      <div className="form-floating">
        <textarea className="form-control" onChange={props.handleInputChange} name="message" placeholder="Leave a message here" id="messageInput" value={props.message} style={messageStyle}></textarea>
        <label htmlFor="messageInput">Message</label>
      </div>
    </form>
  );
}