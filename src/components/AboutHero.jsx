import Container from "./Container";

function AboutHero() {
    return (
        <section className="bg-gray-900 py-28 text-white">
            <Container>
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        About
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                        Learn more about the photographer behind the camera.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default AboutHero;