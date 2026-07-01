import { useState } from "react";
import ContactForm from "./ContactForm";

import Container from "./Container";
import photographer from "../assets/images/camera1.jpg";

function AboutContent() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(form);

        // Backend will be connected later.
    };

    return (
    <section className="py-24">
        <Container>
        {/* About Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex justify-center">
            <img
                src={photographer}
                alt="Photographer"
                className="h-[500px] w-[400px] rounded-xl object-cover shadow-xl"
            />
            </div>

            <div>
            <h2 className="text-4xl font-bold tracking-tight pl-9">
                Behind the Lens
            </h2>
            <div className="mt-8 border-l-4 border-gray-900 pl-8">
                <p className="text-lg leading-7 text-gray-700">
                Beep boop! This is a placeholder for you.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.        
                <br />
                <br />
                </p>
            </div>
            </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto mt-24 max-w-3xl">
            <h2 className="text-center text-4xl font-bold">Send an Inquiry</h2>
            <p className="mt-4 text-center text-gray-500">
            Interested in working together? Complete the form below and I'll get
            back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={form.firstName}
                onChange={handleChange}
                required
                className="rounded-lg border p-4"
                />

                <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={form.lastName}
                onChange={handleChange}
                required
                className="rounded-lg border p-4"
                />
            </div>

            <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-4"
            />

            <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-4"
            />

            <textarea
                name="message"
                rows="7"
                placeholder="Your Message *"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-4"
            />

            <button
                type="submit"
                className="rounded-lg bg-black px-8 py-4 text-white transition hover:bg-gray-800"
            >
                Send Inquiry
            </button>
            </form>
        </div>
        </Container>
    </section>
    );
}

export default AboutContent;
