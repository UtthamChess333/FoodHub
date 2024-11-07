import "./contact.css";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8502f41d-3391-412e-8312-d0bd82ffaec0");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: json
    });
    res.json().then(res => {
      if (res.success) {
        console.log("Success", res);
      }
    });
  };

  return (
    <section className="contact">
      <form className="form" onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            name="name"
            placeholder="Enter your name"
            requires
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            name="email"
            placeholder="Enter your email"
            requires
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" alert="Message Sent Sucessfully">Send message</button>
      </form>
    </section>
  );
};

export default Contact;
