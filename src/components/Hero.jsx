import heroImage from "../assets/images/temporary_pic1.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
          backgroundImage: `url(${heroImage})`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Hero content */}
      <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        
        <p className="mt-6 mx-auto max-w-2xl text-xl text-left">
          [ Here, you'll find some of my favorite photography work. Feel free to explore the galleries, learn more about me, and get in touch if you'd like to collaborate or have any questions. ]
        </p>

        <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-black hover:bg-gray-200 transition">
          View Portfolio
        </button>

      </div>
    </section>
  );
}

export default Hero;