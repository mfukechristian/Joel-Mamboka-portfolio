import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ Use the new SDK
import "./../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    businessDescription: "",
    projectDescription: "",
    additionalComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      business_name: formData.businessName || "N/A",
      business_description: formData.businessDescription,
      project_description: formData.projectDescription,
      additional_comments: formData.additionalComments || "None",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("✅ Email sent successfully!", response.text);
        setSuccessMessage("Your message has been sent!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          businessName: "",
          businessDescription: "",
          projectDescription: "",
          additionalComments: "",
        });
      })
      .catch((err) => {
        console.error("❌ Failed to send email:", err);
        setErrorMessage("Failed to send the message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-page">
      <h1>
        If you have a project in mind, please complete the form below to send
        your enquiry.
      </h1>

      <form onSubmit={handleSubmit}>
        {/* First Name and Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Business Description */}
        <div className="form-group">
          <label htmlFor="businessDescription">
            Please describe your business. (required)
          </label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            value={formData.businessDescription}
            onChange={handleChange}
            required
          />
        </div>

        {/* Project Description */}
        <div className="form-group">
          <label htmlFor="projectDescription">
            Please describe your project. (required)
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          />
        </div>

        {/* Additional Comments */}
        <div className="form-group">
          <label htmlFor="additionalComments">Additional comments?</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        {/* Messages */}
        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default ContactPage;
