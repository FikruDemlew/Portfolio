import { profile } from '../../data/profile';
import { resume } from '../../data/resume';
import { scrollToSection } from '../../utils/scroll';
import Button from '../ui/Button';
import Container from '../ui/Container';
import ProfileAvatar from '../ui/ProfileAvatar';
import SocialLinks from '../ui/SocialLinks';

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="glow-orb pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full blur-3xl" aria-hidden="true" />
      <div className="glow-orb pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full blur-3xl" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="section-fade-in flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary sm:text-sm">
                {profile.availability}
              </span>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm text-muted sm:text-base">Hello, I'm</p>
              <h1
                id="hero-heading"
                className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                <span className="text-gradient">{profile.name}</span>
              </h1>
              <p className="text-xl font-semibold text-secondary sm:text-2xl">{profile.title}</p>
              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')}>View Projects</Button>
              <Button variant="secondary" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
              <Button
                variant="ghost"
                as="a"
                href={resume.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </Button>
            </div>

            <SocialLinks className="pt-2 lg:hidden" />
          </div>

          <div className="section-fade-in flex flex-col items-center gap-8 lg:items-end">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full bg-linear-to-br from-secondary/15 to-white/5 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-full bg-linear-to-br from-secondary/20 via-transparent to-zinc-700/30 p-1.5">
                <ProfileAvatar size="lg" />
              </div>
            </div>

            <div className="hidden w-full max-w-sm flex-col gap-4 lg:flex">
              <div className="glass-panel rounded-2xl p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-secondary">Location</p>
                <p className="mt-2 text-sm text-primary">{profile.location}</p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-muted transition-colors hover:text-secondary"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Explore</span>
          <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </Container>
    </section>
  );
};

export default Hero;
