import { profile } from '../../data/profile';
import { resume } from '../../data/resume';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import SocialLinks from '../ui/SocialLinks';

const Contact = () => {
  return (
    <Section id="contact" ariaLabelledby="contact-heading" className="bg-surface/40">
      <Container>
        <SectionHeader
          id="contact-heading"
          eyebrow="Contact"
          title="Let's Connect"
          description="I'm open to internships, full-time roles, and collaborations. Reach out and let's build something meaningful."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Whether you're a recruiter, hiring manager, or fellow developer, I'd love to hear from you.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-secondary">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 inline-block text-base font-medium text-primary transition-colors hover:text-secondary"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-secondary">Availability</p>
                <p className="mt-1 text-base text-primary">{profile.availability}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href={`mailto:${profile.email}`}>
                Send Email
              </Button>
              <Button variant="secondary" as="a" href={resume.pdfPath} download={resume.fileName}>
                Download CV
              </Button>
            </div>
          </div>

          <div className="glass-panel flex flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-white">Social profiles</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Connect with me on LinkedIn, GitHub, Telegram, or email for updates, projects, and opportunities.
              </p>
            </div>
            <SocialLinks className="mt-8" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
