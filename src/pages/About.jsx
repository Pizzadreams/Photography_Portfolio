import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import ContactForm from "../components/ContactForm";

function About() {
    return (
        <>
            <AboutHero />
            <AboutContent />
            <ContactForm 
                title="Like what you see?"
                description= {
                    <>
                        Let's capture the memory together. <br />
                        Complete the form below and I'll get back to you as soon as I can.
                    </>
                }
            />
        </>
    );
}

export default About;