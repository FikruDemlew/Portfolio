const Section = ({ id, children, className = '', ariaLabelledby }) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledby}
    className={`py-20 sm:py-28 ${className}`}
  >
    {children}
  </section>
);

export default Section;
