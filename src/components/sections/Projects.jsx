import { projects } from '../../data/projects';
import Card from '../Card';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const Projects = () => {
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
          description="A collection of projects I've worked on."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
