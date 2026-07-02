import Container from "./Container";
import ContactForm from "./ContactForm";
import photographer from "../assets/images/camera1.jpg";

function AboutContent() {
    return (
    <section className="py-10">
        <Container>
        {/* About Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
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
            
            <div className="flex justify-center">
                <img
                    src={photographer}
                    alt="Photographer"
                    className="h-[600px] w-[420px] rounded-xl object-cover shadow-xl"
                />
            </div>
        </div>
        </Container>
    </section>
    );
}

export default AboutContent;
