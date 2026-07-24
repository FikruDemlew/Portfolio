# CV / Resume Files

Place your CV files in this folder.

## Required (recommended)

- **`fikiru-demlew-cv.pdf`** — main CV used for preview, open-in-tab, and download actions on the portfolio.

## How it works

The portfolio reads the CV path from `src/data/resume.js`. By default:

- Preview: embedded viewer on the Resume section
- Open: `/cv/fikiru-demlew-cv.pdf` in a new browser tab
- Download: same file with a friendly download filename

## Adding another format

You can add another entry to the `formats` array in `src/data/resume.js`, for example:

```js
{
  type: 'docx',
  label: 'Word',
  path: '/cv/fikiru-demlew-cv.docx',
  mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}
```

Then wire up an additional download button in the Resume section if needed.
