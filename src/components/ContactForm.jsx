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

    setStatus("Your message has been sent. Thank you! I will get back to you as soon as I can.");

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

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Reach out using the form below for any inquiries, or collaborations. I'll get back to you as soon as possible.
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