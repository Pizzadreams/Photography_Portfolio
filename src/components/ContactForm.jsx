import { useState } from "react";
import Container from "./Container";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setStatus("Thanks! Your message has been recorded.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-4 text-center text-gray-600 text-left">
            Reach out for any inquiries, collaborations, or just to say hello! Fill out the form below and I'll get back to you as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            {/* First + Last Name */}

            {/* Email */}

            {/* Subject */}

            {/* Message */}

            {/* Submit */}

            {/* Status Message */}

          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;