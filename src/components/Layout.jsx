import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { handleInitialHash, scrollToSection } from '../utils/scroll';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    handleInitialHash();
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace('#', '');
    window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
