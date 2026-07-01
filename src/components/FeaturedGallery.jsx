import { useState } from "react";

import Container from "./Container";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "./Lightbox";
import { photos } from "../data/photos";

function FeaturedGallery() {
  const featuredPhotos = photos.slice(0,6);
  const [selectedIndex, setSelectedIndex] = useState(null);

  /* Helper functions */
  const openLightbox = (image) => {
    const index = featuredPhotos.findIndex((photo) => photo.id === image.id);

    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => 
      prevIndex === featuredPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setSelectedIndex((prevIndex) => 
      prevIndex === 0 ? featuredPhotos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-gray-100">

      <Container>
        <h2 className="text-4xl font-bold text-center">
          Featured Work
        </h2>

        <p className="mt-4 mb-12 text-center text-gray-600">
          Free images from Unsplash, check out the artists if you like their work or if you want to show support!
        </p>
        
        <GalleryGrid
          photos={featuredPhotos}
          onImageClick={openLightbox}
        />

        <Lightbox
          image={featuredPhotos[selectedIndex]}
          photos={featuredPhotos}
          currentIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
          
        />
      </Container>
    </section>
  );
}

export default FeaturedGallery;