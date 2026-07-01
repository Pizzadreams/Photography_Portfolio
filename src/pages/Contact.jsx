import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <Container>
            <section className="py-24">
            
                <h1 className="mb-12 text-center text-5xl font-bold">
                    Contact
                </h1>

                <ContactInfo />

                <div className="mt-16">
                    <ContactForm />
                </div>

            </section>
        </Container>
    );
}

export default Contact;