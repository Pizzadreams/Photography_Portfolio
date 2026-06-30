import Container from "./Container";

function FeaturedGallery() {
  const featuredPhotos = photos.slice(0,3);

  return (
    <section className="py-24 bg-gray-100">

      <Container>
        <h2 className="text-4xl font-bold text-center">
          Featured Work
        </h2>

        <p className="mt-4 mb-12 text-center text-gray-600">
          A selection of recent photography.
        </p>
        
        <GalleryGrid photos={featuredPhotos} />
      </Container>
    </section>
  );
}

export default FeaturedGallery;