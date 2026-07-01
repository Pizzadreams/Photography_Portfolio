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
                        Let's Connect!
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        [Insert your Call-To-Action here]
                    </p>

                </div>

                {/* Contact Section */}
                <div className="mt-20 grid gap-10 lg:grid-cols-2">

                    {/* Google Map */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">

                        <iframe
                            title="Dinosaur, Colorado"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24364.209047416116!2d-109.0264656291155!3d40.241837173935764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8745a5fae709b0e9%3A0x2a9ade53888285be!2sDinosaur%2C%20CO%2081610!5e0!3m2!1sen!2sus!4v1782946000836!5m2!1sen!2sus"
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