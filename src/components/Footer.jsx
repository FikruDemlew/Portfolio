import { profile } from '../data/profile';
import Container from './ui/Container';
import SocialLinks from './ui/SocialLinks';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted">{profile.tagline}</p>
        </div>

        <SocialLinks size="sm" />

        <p className="text-sm text-muted">© {year} {profile.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
