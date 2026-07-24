import { useEffect, useState } from 'react';
import { resume } from '../../data/resume';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [isCheckingCv, setIsCheckingCv] = useState(true);

  const pdfFormat = resume.formats.find((format) => format.type === 'pdf');

  useEffect(() => {
    let isMounted = true;

    fetch(resume.pdfPath, { method: 'HEAD' })
      .then((response) => {
        if (isMounted) setPreviewError(!response.ok);
      })
      .catch(() => {
        if (isMounted) setPreviewError(true);
      })
      .finally(() => {
        if (isMounted) setIsCheckingCv(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Section id="resume" ariaLabelledby="resume-heading">
      <Container>
        <SectionHeader
          id="resume-heading"
          eyebrow="Resume"
          title="CV / Resume"
          description="View, open, or download my CV. Replace the placeholder PDF in public/cv/ with your latest resume."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex h-40 items-center justify-center rounded-xl border border-dashed border-secondary/40 bg-linear-to-br from-secondary/10 to-transparent">
              <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-wider text-secondary">Document</p>
                <p className="mt-2 text-lg font-semibold text-white">{resume.displayName}</p>
                <p className="mt-1 text-sm text-muted">{pdfFormat?.label ?? 'PDF'} format</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setShowPreview((value) => !value)}>
                {showPreview ? 'Hide Preview' : 'View CV'}
              </Button>
              <Button
                variant="secondary"
                as="a"
                href={resume.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in New Tab
              </Button>
              <Button variant="ghost" as="a" href={resume.pdfPath} download={resume.fileName}>
                Download PDF
              </Button>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              Place your CV at <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-secondary">public/cv/fikiru-demlew-cv.pdf</code> to enable preview and download.
            </p>
          </div>

          <div className="glass-panel overflow-hidden rounded-2xl">
            {showPreview ? (
              isCheckingCv ? (
                <div className="flex min-h-[420px] items-center justify-center p-8 text-sm text-muted">
                  Loading CV preview...
                </div>
              ) : previewError ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 p-8 text-center">
                  <p className="text-lg font-medium text-white">CV preview unavailable</p>
                  <p className="max-w-md text-sm text-muted">
                    Add your PDF to <span className="font-mono text-secondary">public/cv/fikiru-demlew-cv.pdf</span> and refresh the page.
                  </p>
                  <Button
                    variant="secondary"
                    as="a"
                    href={resume.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Opening CV
                  </Button>
                </div>
              ) : (
                <iframe
                  title={resume.displayName}
                  src={resume.pdfPath}
                  className="min-h-[420px] w-full bg-white"
                  onError={() => setPreviewError(true)}
                />
              )
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 p-8 text-center">
                <p className="text-lg font-medium text-white">Preview your CV here</p>
                <p className="max-w-md text-sm text-muted">
                  Click "View CV" to display your resume directly on the website without leaving the page.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Resume;
