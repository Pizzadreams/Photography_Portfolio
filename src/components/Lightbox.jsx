import { useEffect } from "react";

function Lightbox({
    image,
    photos,
    currentIndex,
    onClose,
    onNext,
    onPrevious,
}) {

    useEffect(() => {
        if (!image) return;

        const handleKeyDown = (event) => {
            if (!image) return; /*guard clause, self-contained for re-use: stops function if variable is null, undefined, or empty*/
            
            /* Handle keyboard navigation for lightbox */
            switch (event.key) {
                case "Escape":
                    onClose();
                    break;
                
                case "ArrowLeft":
                    onPrevious();
                    break;
                
                case "ArrowRight":
                    onNext();
                    break;
                    
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [image, onClose, onNext, onPrevious]);

    /* Prevent scrolling when the lightbox is open */
    useEffect(() => {
        if (!image) return;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [image]);

    if (!image) return null;

        return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        onClick={onClose}
    >
        {/* Central column wrapper */}
        <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute right-2 top-2 z-50 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black"
            >
                ✕
            </button>

            {/* Viewer */}
            <div className="flex h-[75vh] w-full max-w-6xl items-center justify-center">
                <img
                    src={image.image}
                    alt={image.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white">
                <h2 className="text-2xl font-bold">
                    {image.title}
                </h2>

                <p className="mt-1 text-gray-300">
                    {image.category}
                </p>

                {image.showAttribution && image.photographer && (
                    <p className="mt-1 text-sm text-gray-400">
                        by{" "}
                        <a
                            href={image.photographer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            {image.photographer.name}
                        </a>
                    </p>
                )}

                <p className="mt-3 text-sm text-gray-400">
                    {currentIndex + 1} / {photos.length}
                </p>
            </div>
        </div>

        {/* Navigation buttons (TEMP still global for now) */}
        <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white"
        >
            ❮
        </button>

        <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white"
        >
            ❯
        </button>
    </div>
)};

export default Lightbox;