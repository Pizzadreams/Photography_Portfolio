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
                className="fixed top-6 right-6 z-50 rounded-full bg-black/60 p-3 text-2xl text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/80"
            >
                ✕
            </button>

            {/* Viewer */}
            <div className="relative flex h-[75vh] w-full max-w-6xl items-center justify-center">

                <div
                    onClick={onPrevious}
                    className="group absolute left-0 top-0 h-full w-2/5 cursor-pointer"
                >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-2xl text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ❮
                    </div>
                </div>

                
                <div className="absolute left-2/5 top-0 h-full w-1/5" 
                />

                <div
                    onClick={onNext}
                    className="group absolute right-0 top-0 h-full w-2/5 cursor-pointer"
                >
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-2xl text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ❯
                    </div>
                </div>

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

    </div>
)};

export default Lightbox;