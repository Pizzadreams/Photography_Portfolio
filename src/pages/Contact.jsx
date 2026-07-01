import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

import { contact } from "../data/contact";

function Contact() {
    return (
        <section className="bg-white py-24">

        <Container>

            <h1 className="mb-12 text-center text-5xl font-bold">
            Contact
            </h1>

            <ContactInfo contact={contact} />

            <div className="mt-20">
            <ContactForm />
            </div>

        </Container>

        </section>
    );
}

export default Contact;