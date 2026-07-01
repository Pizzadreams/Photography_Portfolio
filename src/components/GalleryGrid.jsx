import ImageCard from "./ImageCard";

/* Displaying multiple images in a grid layout */
function GalleryGrid({ photos, onImageClick }) {
  return (
    /* Mapping through the photos array and rendering ImageCard for each photo */
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}

export default GalleryGrid;