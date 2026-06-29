import Container from "./Container";

function Hero() {
  return (
    <section className="bg-zinc-900 text-white py-32">
      <Container>
        <h2 className="text-5xl font-bold">
            Capturing Moments
        </h2>

        <p className="mt-6 max-w-xl text-lg">
            <p>{"{ Insert photos here }"}</p>
        </p>

        <button className="mt-8 rounded bg-white px-6 py-3 text-black">
            View Gallery
        </button>
      </Container>
    </section>
  );
}

export default Hero;