export default function ContactPage() {

  const messageStyle = { height: 400 };

  function ContactForm() {
    return (
      <>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="nameInput" placeholder="Name" />
          <label htmlFor="nameInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
          <label htmlFor="emailInput">Email address</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a message here" id="messageInput" style={messageStyle}></textarea>
          <label htmlFor="messageInput">Message</label>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <div className="row m-5 d-flex justify-content-center">
        <div className="col-xxl-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}