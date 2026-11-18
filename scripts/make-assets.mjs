// Draws the social preview image and the PNG icons from the same tokens and fonts as the site,
// then screenshots them with headless Chrome. Run it when the name or headline changes:
//
//   npm run assets            (set CHROME_PATH if Chrome is not on the PATH as "google-chrome")
//
// The results are committed, so a normal build needs neither Chrome nor this script.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'yaml';

const root = fileURLToPath(new URL('..', import.meta.url));
const chrome = process.env.CHROME_PATH ?? 'google-chrome';
const profile = parse(readFileSync(join(root, 'src/content/profile.yaml'), 'utf8'));
const font = (file) => pathToFileURL(join(root, 'src/assets/fonts', file)).href;

const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const base = `
  @font-face { font-family: Text; src: url('${font('atkinson-hyperlegible-next-latin.woff2')}'); font-weight: 200 800; }
  @font-face { font-family: Sign; src: url('${font('sofia-sans-extra-condensed-latin.woff2')}'); font-weight: 1 1000; }
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 100%; height: 100%; overflow: hidden; }
  body { background: #ecefea; color: #101413; font-family: Text, sans-serif; }
`;

const preview = `<!doctype html><meta charset="utf-8"><style>${base}
  body { display: grid; grid-template-columns: 76px 1fr; padding: 64px 72px 60px 56px; }
  .rail { position: relative; }
  .rail::before { content: ''; position: absolute; left: 12px; top: 14px; bottom: 53px; width: 5px; background: #101413; }
  .rail::after { content: ''; position: absolute; left: 0; top: 14px; width: 29px; height: 5px; background: #101413; }
  main { display: flex; flex-direction: column; }
  .sign { font: 600 30px/1 Sign, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; display: flex; gap: 36px; }
  h1 { margin-top: 44px; font-size: 74px; font-weight: 740; line-height: 1.05; letter-spacing: -0.022em; text-wrap: balance; }
  .signal { margin-top: auto; position: relative; display: flex; align-items: center; gap: 24px; }
  .signal::before { content: ''; position: absolute; right: 100%; top: 50%; width: 64px; height: 5px; margin-top: -2.5px; background: #101413; }
  .lamp { width: 96px; height: 96px; border: 5px solid #101413; border-radius: 50%; background: #f5a800; }
  .signal span { font: 600 36px/1 Sign, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; }
</style>
<div class="rail"></div>
<main>
  <p class="sign"><span>${escape(profile.name)}</span><span>${escape(profile.role)}</span></p>
  <h1>${escape(profile.hero.headline)}</h1>
  <p class="signal"><i class="lamp"></i><span>${escape(profile.contact.held)}</span></p>
</main>`;

// The icon is the monogram from favicon.svg, drawn edge to edge so the tab shows a solid tile.
const icon = () => `<!doctype html><meta charset="utf-8"><style>${base}
  body { background: #101413; }
  svg { display: block; width: 100vw; height: 100vh; }
</style>${readFileSync(join(root, 'public/favicon.svg'), 'utf8').replace(' rx="5"', '')}`;

const jobs = [
  { file: 'og.png', html: preview, width: 1200, height: 630 },
  { file: 'apple-touch-icon.png', html: icon(), width: 180, height: 180 },
  { file: 'favicon-32.png', html: icon(), width: 32, height: 32 },
];

const work = mkdtempSync(join(tmpdir(), 'portfolio-assets-'));
try {
  for (const job of jobs) {
    const page = join(work, `${job.file}.html`);
    writeFileSync(page, job.html);
    execFileSync(
      chrome,
      [
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        '--virtual-time-budget=3000',
        `--window-size=${job.width},${job.height}`,
        `--screenshot=${join(root, 'public', job.file)}`,
        pathToFileURL(page).href,
      ],
      { stdio: 'ignore' },
    );
    console.log(`public/${job.file}  ${job.width}x${job.height}`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
