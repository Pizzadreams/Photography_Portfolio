import Container from "./Container";

function FeaturedGallery() {
  return (
    <section className="bg-gray-100 py-20">
      <Container>
        <h2 className="text-center text-4xl font-bold">
          Featured Gallery
        </h2>

        <p className="mt-4 text-center text-gray-600">
          A small selection of some favorite moments.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-64 rounded-lg bg-gray-300"></div>
          <div className="h-64 rounded-lg bg-gray-300"></div>
          <div className="h-64 rounded-lg bg-gray-300"></div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedGallery;