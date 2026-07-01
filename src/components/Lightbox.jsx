function Lightbox({
    image,
    photos,
    currentIndex,
    onClose,
    onNext,
    onPrevious,
}) {
    if (!image) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4" onClick={onClose}>
            {/* Image container */}
        <div className="relative max-h-[90vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}>
            <img
                src={image.image}
                alt={image.title}
                className="max-h-[80vh] rounded-lg shadow-2xl"
            />

            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute right-2 top-2 rounded bg-black/60 px-3 py-2 text-white hover:bg-black"
            >
                ✕
            </button>

            {/* Previous button */}
            <button
                onClick={onPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded bg-black/60 px-4 py-3 text-3xl text-white hover:bg-black"
            >
                ❮
            </button>

            {/* Next button */}
            <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded bg-black/60 px-4 py-3 text-3xl text-white hover:bg-black"
            >
                ❯
            </button>

            {/* Caption */}
            <div className="mt-4 text-center text-white>">
                <h2 className="text-2xl font-semibold">
                {image.title}</h2>
                <p className="text-gray-300">{image.category}</p>
            
                {image.showAtttribution && image.photographer && (
                    <p className="mt-2 text-sm text-gray-400">
                        by {" "}
                        <a
                            href={image.photographer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-600"
                            >

                            </a>
                    </p>
                )}

                <p className="mt-2 text-sm text-gray-400">
                    {currentIndex + 1} / {photos.length}
                </p>
            </div>
        </div>
    </div>
    );
}

export default Lightbox;