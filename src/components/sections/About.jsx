import { aboutContent } from '../../data/profile';
import { scrollToSection } from '../../utils/scroll';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const About = () => {
  return (
    <Section id="about" ariaLabelledby="about-heading" className="bg-surface/40">
      <Container>
        <SectionHeader
          id="about-heading"
          eyebrow="About"
          title="About Me"
          description={aboutContent.intro}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Get to know me</h3>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <Button
              variant="secondary"
              className="mt-8"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Focus', value: 'Frontend Development' },
              { label: 'Approach', value: 'Result-oriented delivery' },
              { label: 'Strength', value: 'Responsive UI & UX' },
              { label: 'Status', value: 'Open to opportunities' },
            ].map((item) => (
              <div key={item.label} className="glass-panel rounded-xl p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-secondary">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-primary sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
