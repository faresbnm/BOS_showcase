import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ivm872s", // Replace with your EmailJS service ID
        "template_gpmorpk", // Replace with your EmailJS template ID
        {
          name: formData.name,
          from_email: formData.email,
          phone: formData.number,
          message: formData.message,
        },
        "XhNuR_yXJSWUmUYgy" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          Swal.fire("Success!", "Your message has been sent.", "success");
          setFormData({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          Swal.fire(
            "Error!",
            "There was an error sending your message.",
            "error"
          );
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  required
                  placeholder="Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  required
                  className="message-box"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21860.4585099461!2d3.0611493415529205!3d36.70368022920202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad272c8829d3%3A0x20d5512ccd99f4dd!2sA%C3%AFn%20Naadja%2C%20Djasr%20Kasentina!5e0!3m2!1sfr!2sdz!4v1713132756497!5m2!1sfr!2sdz"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
