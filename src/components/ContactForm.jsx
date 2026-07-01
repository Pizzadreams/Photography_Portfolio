import { useState } from "react";
import Container from "./Container";

function ContactForm({
    title = "Let's connect!",
    description = "I'd love to hear from you.",
}) {
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
});

const [status, setStatus] = useState("");

const handleChange = (event) => {
    setFormData((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    // Connect backend later

    setStatus(
    "Your message has been sent. Thank you! I'll get back to you as soon as possible."
    );

    setFormData({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    });
};
    return (
        <section className="py-10">
            <Container>
                <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">

                <h2 className="text-center text-2xl font-bold">
                    {title}
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-center text-gray-600">
                    {description}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    />
                    </div>

                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    />

                    <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    />

                    <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    />

                    <button
                    type="submit"
                    className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                    Send Inquiry
                    </button>

                    {status && (
                    <p className="text-center text-green-600">
                        {status}
                    </p>
                    )}
                </form>

                </div>
            </Container>
            </section>
        );
    }

export default ContactForm;