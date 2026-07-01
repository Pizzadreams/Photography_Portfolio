/* Displaying a single image card with title and category */
function ImageCard({ image }) {
    return (
        <div className="overflow-hidden rounded-xl shadow-lg">
            <img
                src={image.image}
                alt={image.title}
                className="h-72 w-full object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold">
                    {image.title}
                </h3>

                <p className="text-gray-500">{image.category}</p>

                {image.photographer && image.photographer && (
                    <p className="mt-2 text-sm text-gray-400">
                        Photo by{" "}
                        <a
                            href={image.photographer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-600">
                            {image.photographer.name}
                        </a>                        
                    </p>
                )}
            </div>
        </div>
    );
}
export default ImageCard;