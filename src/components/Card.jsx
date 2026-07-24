import { useEffect, useState } from 'react';

const Card = ({ title, description, imgSrc, webLink, tags = [], accent = 'from-cyan-500/20 to-teal-500/10' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsModalOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="relative block w-full overflow-hidden text-left"
          aria-label={`Preview ${title} project`}
        >
          {imageError ? (
            <div className={`flex h-48 items-center justify-center bg-linear-to-br ${accent} sm:h-52`}>
              <span className="text-2xl font-bold text-white/90">{title}</span>
            </div>
          ) : (
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
              src={imgSrc}
              alt={`${title} project preview`}
              onError={() => setImageError(true)}
            />
          )}
        </button>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-4">
            {description}
          </p>

          <a
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-secondary/50 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-slate-950"
          >
            View Project
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-${title}`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id={`modal-${title}`} className="text-2xl font-bold text-white">
                {title}
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg border border-white/10 px-3 py-1 text-sm text-muted transition-colors hover:text-white"
                aria-label="Close project preview"
              >
                Close
              </button>
            </div>

            {!imageError && (
              <img className="mb-4 w-full rounded-xl" src={imgSrc} alt={title} />
            )}
            <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Visit Live Project
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
