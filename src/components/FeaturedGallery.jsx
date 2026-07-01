import Container from "./Container";
import GalleryGrid from "./GalleryGrid";
import { photos } from "../data/photos";

function FeaturedGallery() {
  const featuredPhotos = photos.slice(0,6);

  return (
    <section className="py-24 bg-gray-100">

      <Container>
        <h2 className="text-4xl font-bold text-center">
          Featured Work
        </h2>

        <p className="mt-4 mb-12 text-center text-gray-600">
          Free images from Unsplash, check out the artists if you like their work or if you want to show support!
        </p>
        
        <GalleryGrid photos={featuredPhotos} />
      </Container>
    </section>
  );
}

export default FeaturedGallery;