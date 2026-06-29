import Container from "./Container";
import heroImage from "../assets/images/temporary_pic1.jpg";

function Hero() {
  return (
    <section
        className="h-screen bg-cover bg-center"
        style={{
            backgroundImage: `url(${heroImage})`
        }}
    >
      <Container>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">
            Capturing Moments
          </h1>

          <p className="mt-4 text-xl">
            Landscapes • Wildlife • Portraits
          </p>

          <button className="mt-8 rounded bg-white px-6 py-3 text-black">
            Explore Gallery
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;