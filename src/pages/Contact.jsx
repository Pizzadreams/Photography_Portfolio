import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

import { contact } from "../data/contact";

function Contact() {
    return (
        <section className="bg-white py-24">
            <Container>

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <h1 className="text-5xl font-bold">
                        Let's Connect
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Whether you're looking to book a photography session,
                        inquire about licensing, or simply have a question,
                        I'd love to hear from you.
                    </p>

                </div>

                {/* Contact Section */}
                <div className="mt-20 grid gap-10 lg:grid-cols-2">

                    {/* Google Map */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">

                        <iframe
                            title="Dinosaur, Colorado"
                            src="https://maps.app.goo.gl/heCNxn7Mhx6czJm7A"
                            className="h-[420px] w-full"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>

                    {/* Contact Information */}
                    <ContactInfo
                        email={contact.email}
                        phone={contact.phone}
                        location={contact.location}
                        instagram={contact.instagram}
                        facebook={contact.facebook}
                    />

                </div>

                {/* Contact Form */}
                <ContactForm
                    title="Hello!"
                    description={
                        <>
                            Please reach out if you have any questions or want to connect!
                        </>
                    }
                />

            </Container>
        </section>
    );
}

export default Contact;