export function scrollToSection(sectionId, { onComplete } = {}) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  onComplete?.();
}

export function handleInitialHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  window.requestAnimationFrame(() => {
    scrollToSection(hash);
  });
}
