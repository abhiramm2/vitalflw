const fs = require('fs');

const cssPath = 'app/page.module.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const replacements = [
  // Font Sizes
  [/font-size:\s*10px;/g, 'font-size: var(--text-xs);'],
  [/font-size:\s*11px;/g, 'font-size: var(--text-xs);'],
  [/font-size:\s*0\.75rem;/g, 'font-size: var(--text-xs);'],
  [/font-size:\s*0\.8125rem;/g, 'font-size: var(--text-sm);'],
  [/font-size:\s*0\.875rem;/g, 'font-size: var(--text-sm);'],
  [/font-size:\s*1rem;/g, 'font-size: var(--text-base);'],
  [/font-size:\s*1\.125rem;/g, 'font-size: var(--text-lg);'],
  [/font-size:\s*1\.25rem;/g, 'font-size: var(--text-xl);'],
  [/font-size:\s*1\.5rem;/g, 'font-size: var(--text-2xl);'],
  [/font-size:\s*1\.875rem;/g, 'font-size: var(--text-3xl);'],
  [/font-size:\s*2\.25rem;/g, 'font-size: var(--text-4xl);'],
  [/font-size:\s*2\.5rem;/g, 'font-size: var(--text-5xl);'], // 2.5 -> 3rem (5xl) or keep 4xl? 4xl is 2.25, 5xl is 3. We'll use 5xl.
  [/font-size:\s*2\.8rem;/g, 'font-size: var(--text-5xl);'],

  // Font Weights
  [/font-weight:\s*400;/g, 'font-weight: var(--font-normal);'],
  [/font-weight:\s*500;/g, 'font-weight: var(--font-medium);'],
  [/font-weight:\s*600;/g, 'font-weight: var(--font-semibold);'],
  [/font-weight:\s*700;/g, 'font-weight: var(--font-bold);'],

  // Line Heights
  [/line-height:\s*1;/g, 'line-height: var(--leading-none);'],
  [/line-height:\s*1\.05;/g, 'line-height: var(--leading-tight);'],
  [/line-height:\s*1\.1;/g, 'line-height: var(--leading-tight);'],
  [/line-height:\s*1\.2;/g, 'line-height: var(--leading-tight);'],
  [/line-height:\s*1\.375;/g, 'line-height: var(--leading-snug);'],
  [/line-height:\s*1\.5;/g, 'line-height: var(--leading-normal);'],
  [/line-height:\s*1\.6;/g, 'line-height: var(--leading-relaxed);'],
  [/line-height:\s*1\.625;/g, 'line-height: var(--leading-relaxed);'],
];

replacements.forEach(([regex, replacement]) => {
  cssContent = cssContent.replace(regex, replacement);
});

fs.writeFileSync(cssPath, cssContent);
console.log('Typography replacements applied.');
