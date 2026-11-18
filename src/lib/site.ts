import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getEntry } from 'astro:content';

/** Prefix a site-relative path with the configured base path. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export async function getProfile() {
  const entry = await getEntry('profile', 'profile');
  if (!entry) throw new Error('src/content/profile.yaml is missing');
  return entry.data;
}

/** The resume is optional: the link only renders when the PDF is in public/. */
export function resumeHref(fileName: string): string | null {
  return existsSync(join(process.cwd(), 'public', fileName)) ? url(fileName) : null;
}

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;
