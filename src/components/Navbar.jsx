import { useState } from 'react';
import { navItems } from '../data/navigation';
import { profile } from '../data/profile';
import useScrollSpy from '../hooks/useScrollSpy';
import { scrollToSection } from '../utils/scroll';
import ProfileAvatar from './ui/ProfileAvatar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((item) => item.id));

  const handleNavigate = (sectionId) => {
    scrollToSection(sectionId, {
      onComplete: () => setMenuOpen(false),
    });
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home section"
        >
          <ProfileAvatar size="sm" />
          <span className="hidden text-lg font-semibold text-white sm:inline">{profile.name}</span>
        </button>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>

        <div
          id="mobile-menu"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-5 right-5 top-[calc(100%+0.75rem)] flex-col gap-2 rounded-2xl border border-white/10 bg-surface p-4 shadow-2xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeId === item.id
                  ? 'bg-secondary/15 text-secondary'
                  : 'text-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
