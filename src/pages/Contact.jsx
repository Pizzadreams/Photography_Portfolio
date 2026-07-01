import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

import { contact } from "../data/contact";

function Contact() {
    return (
        <section className="bg-gray-50 py-22">
            <Container>

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <h1 className="text-4xl font-bold">
                        Let's Connect!
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        [Insert your Call-To-Action here]
                    </p>

                </div>

                {/* Contact Section */}
                <div className="mt-20 grid gap-1 lg:grid-cols-2">

                    {/* Google Map */}
                    <div className="overflow-hidden rounded-3xl shadow-sm">

                        <iframe
                            title="Bainbridge Island, Washington"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172038.2243267011!2d-122.68370146654892!3d47.64367689058479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54903c3256128b2b%3A0xdfa86644a0f0930e!2sBainbridge%20Island%2C%20WA!5e0!3m2!1sen!2sus!4v1782946882095!5m2!1sen!2sus"
                            className="h-[420px] w-full rounded-3"
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