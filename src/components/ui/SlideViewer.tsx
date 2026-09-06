import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SlideViewerProps {
  images: string[];
  name: string;
  className?: string;
}

function SlideViewer({ images, name, className = "w-full md:w-1/2" }: SlideViewerProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goTo = (next: number) => {
    setIndex(Math.min(Math.max(next, 0), total - 1));
  };

  return (
    <div className={`relative overflow-hidden rounded bg-neutral-900 aspect-video ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`${name} — diapositiva ${index + 1}`}
          loading={index === 0 ? undefined : "lazy"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        aria-label="Diapositiva anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 disabled:opacity-30 disabled:hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        disabled={index === total - 1}
        aria-label="Diapositiva siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 disabled:opacity-30 disabled:hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <FaChevronRight className="text-sm" />
      </button>

      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-10 tabular-nums">
        {index + 1} / {total}
      </span>
    </div>
  );
}

export default SlideViewer;
