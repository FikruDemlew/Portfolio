import { useState } from 'react';
import { projects } from '../../data/projects';
import Card from '../Card';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  const showPreviousProject = () => {
    setActiveProject((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const showNextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length);
  };

  return (
    <Section
      id="projects"
      ariaLabelledby="projects-heading"
      className="bg-linear-to-b from-background via-surface/30 to-background"
    >
      <Container>
        <SectionHeader
          id="projects-heading"
          eyebrow="Portfolio"
          title="My Works"
          description="A collection of my personal and fun side projects."
        />

        <div className="mx-auto flex max-w-3xl items-center gap-2 sm:gap-5">
          <button
            type="button"
            onClick={showPreviousProject}
            className="group flex size-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-surface/80 text-xl text-secondary shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all hover:border-secondary hover:bg-secondary hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            aria-label="Show previous project"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">←</span>
          </button>

          <div key={project.id} className="project-slide-enter min-w-0 flex-1" aria-live="polite">
            <Card key={project.id} {...project} />
          </div>

          <button
            type="button"
            onClick={showNextProject}
            className="group flex size-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-surface/80 text-xl text-secondary shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all hover:border-secondary hover:bg-secondary hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            aria-label="Show next project"
          >
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <div className="flex gap-1.5" aria-label="Project navigation">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveProject(index)}
                className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                  index === activeProject ? 'w-8 bg-secondary' : 'w-1.5 bg-white/25 hover:bg-white/60'
                }`}
                aria-label={`Show ${item.title} project`}
                aria-current={index === activeProject ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
