import heroImage from "../assets/images/camera1.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center pt-16"
      style={{
          backgroundImage: `url(${heroImage})`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero content */}
      <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
        
        <h1 className="mb-4 text-6xl font-bold drop-shadow-lg">
        My Portfolio</h1>
        
        <div className="mt-6 max-w-3xl rounded-4xl bg-black/50 p-4 drop-shadow-lg">

          <p className="text-lg leading-8 text-gray-100 text-left">
            [Introduce yourself here. Share what inspires your photography, the types of moments you like to capture, and what visitors can expect to see in your portfolio.]
          </p>

        </div>

        <div className="absolute bottom-4 right-6 text-xs text-gray-300">
          Photo by{" "}
          <a
            href="https://unsplash.com/@jmacfpv"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-400">
            Justin McFadden
          </a>
        </div>

        <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-black hover:bg-gray-200 transition">
          View Portfolio
        </button>

      </div>
    </section>
  );
}

export default Hero;