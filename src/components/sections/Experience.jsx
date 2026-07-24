import { education, experience } from '../../data/experience';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const TimelineItem = ({ title, subtitle, period, description, highlights = [] }) => (
  <article className="relative border-l border-secondary/30 pl-6 sm:pl-8">
    <span
      className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-secondary ring-4 ring-background"
      aria-hidden="true"
    />
    <div className="glass-panel rounded-2xl p-6">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-secondary">{subtitle}</p>
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted">{period}</p>
      </div>
      <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      {highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

const Experience = () => {
  return (
    <Section id="experience" ariaLabelledby="experience-heading" className="bg-surface/40">
      <Container>
        <SectionHeader
          id="experience-heading"
          eyebrow="Background"
          title="Education & Experience"
          description="A concise overview of my learning path and hands-on development experience."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item) => (
                <TimelineItem
                  key={item.id}
                  title={item.degree}
                  subtitle={item.institution}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((item) => (
                <TimelineItem
                  key={item.id}
                  title={item.role}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                  highlights={item.highlights}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
