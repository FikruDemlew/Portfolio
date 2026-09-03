import { useEffect, useState } from 'react';

const Card = ({ title, description, imgSrc, webLink, tags = [], accent = 'from-white/15 to-zinc-700/10' }) => {
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
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface/80 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-secondary/40 hover:shadow-[0_24px_90px_rgba(255,255,255,0.08)]">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="relative block aspect-video w-full overflow-hidden text-left"
          aria-label={`Preview ${title} project`}
        >
          {imageError ? (
            <div className={`flex h-full items-center justify-center bg-linear-to-br ${accent}`}>
              <span className="text-2xl font-bold text-white/90">{title}</span>
            </div>
          ) : (
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={imgSrc}
              alt={`${title} project preview`}
              onError={() => setImageError(true)}
            />
          )}
        </button>

        <div className="flex flex-1 flex-col p-5 sm:p-7">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-secondary/20 bg-secondary/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
          <p className="mt-3 max-h-36 flex-1 overflow-y-auto pr-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>

          <a
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-secondary/50 bg-secondary/5 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-slate-950"
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
