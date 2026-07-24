const SectionHeader = ({ id, eyebrow, title, description, align = 'center' }) => {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'items-center text-center';

  return (
    <header className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </header>
  );
};

export default SectionHeader;
