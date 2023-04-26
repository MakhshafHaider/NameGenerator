import React from "react";
import emailjs from "emailjs-com";

const contact = () => {
  const serviceId = "service_2jn76dj";
  const templateId = "template_ifb01qv";
  const userId = "ENtDu-e4d1uZGdxMc";

  emailjs.init(userId);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // add recipient email address below
    const recipient = "makhshafzaidi@gmail.com";

    // get the sender's name from the form
    const senderName = e.target.from_name.value;

    // get the user's email address from the form
    const userEmail = e.target.user_email.value;

    // create the email message
    const message = e.target.message.value;

    // send the email message using the recipient's email address and the emailjs template
    const templateParams = {
      to_name: recipient,
      from_name: senderName,
      user_email: userEmail,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div className="form_section">
      <div className="section-title">
        <h2 className="latest_blog_heading">Contact</h2>
      </div>

      <div style={{ textAlign: "center" }}>
        <h2 className="text-dark text-subtitle">Let's get in touch</h2>
        <br />
        <p className="form-contact-email">contact@bgminame.com </p>
      </div>

      <div className="form_contact">
        <form className="php-email-form" onSubmit={sendEmail}>
          <div className="row">
            <div className="form-name">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                className="form-input"
                id="name"
                required
              />
            </div>
            <div className="form-email">
              <label htmlFor="name" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                id="email"
                required
              />
            </div>
          </div>

          <div className="form-subject">
            <label htmlFor="name" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div className="form-message">
            <label htmlFor="name" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>

          <div className="form-button">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
