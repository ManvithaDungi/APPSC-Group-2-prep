import { useEffect, useRef, useState } from 'react';
import { LuX } from 'react-icons/lu';

// Pictures live in public/images. The site may be served from a sub-path (GitHub Pages), so prefix the base.
const url = (p) => import.meta.env.BASE_URL + p.replace(/^\/+/, '');

// A picture from a textbook. Tapping it opens it full screen, where it can be pinch-zoomed.
// Every picture has alt text and a visible caption with its source (book, chapter, figure).
export default function NoteImage({ src, alt, caption, source }) {
  const [open, setOpen] = useState(false);
  const [missing, setMissing] = useState(false);
  const opener = useRef(null);
  const closer = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closer.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener.current?.focus();
    };
  }, [open]);

  // A missing picture shows nothing at all (no placeholder), for example when textbook images are left out of a public build.
  if (missing) return null;

  return (
    <figure className="note-image">
      <button type="button" className="note-image-btn" ref={opener} onClick={() => setOpen(true)} aria-label={`Open picture full screen: ${caption}`}>
        <img src={url(src)} alt={alt} loading="lazy" onError={() => setMissing(true)} />
      </button>
      <figcaption>
        {caption}. <span className="source-line">Source: {source}</span>
      </figcaption>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={caption} onClick={() => setOpen(false)}>
          <button type="button" className="icon-btn lightbox-close" ref={closer} onClick={() => setOpen(false)}>
            <LuX size={24} className="icon" aria-hidden="true" />
            <span>Close</span>
          </button>
          <div className="lightbox-scroll" onClick={(e) => e.stopPropagation()}>
            <img src={url(src)} alt={alt} />
          </div>
          <p className="lightbox-caption">{caption}</p>
        </div>
      )}
    </figure>
  );
}
