/* Displaying a single image card with title and category */
function ImageCard({ image }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src={image}
        alt={image}
        
        className="h-72 w-full object-cover transition duration-300 hover:scale-105"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {image.title}
        </h3>

        <p className="text-gray-500">
          {image.category}
        </p>
      </div>
    </div>
  );
}

export default ImageCard;