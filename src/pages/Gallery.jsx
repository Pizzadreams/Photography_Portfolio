import Container from "../components/Container";
import GalleryGrid from "../components/GalleryGrid";
import { photos } from "../data/photos";

function Gallery() {
  return (
    <section className="py-24">
      <Container>

        <h1 className="mb-12 text-center text-5xl font-bold">
          Gallery
        </h1>

        <GalleryGrid photos={photos} />

      </Container>
    </section>
  );
}

export default Gallery;