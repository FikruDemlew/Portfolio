import { skillBadges, skillCategories } from '../../data/skills';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const Skills = () => {
  return (
    <Section id="skills" ariaLabelledby="skills-heading">
      <Container>
        <SectionHeader
          id="skills-heading"
          eyebrow="Skills"
          title="Technologies & Tools"
          description="A snapshot of the technologies I use to build modern, responsive, and user-focused web experiences."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {skillBadges.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-surface-elevated/60 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-secondary/40 hover:text-secondary"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="glass-panel rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
